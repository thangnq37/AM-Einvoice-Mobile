import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Container,
  Header,
  Content,
  Footer,
  Text,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Label,
  Item,
  Input,
  Form,
  Picker,
  // DatePicker,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const ScreenUpdate = (props) => {
  const navigation = useNavigation();
  const [data, setData] = useState(props.route.params);
  const [choose, setChoose] = useState(data.BILL_KIND_CD);
  const [mode, setMode] = useState('date');
  const [date, setDate] = useState(data.USE_YMD);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    // if(event.type=="dismissed") minusDate(currentDate);
    setDate(currentDate);
    setData({...data, 'USE_YMD': convertDateToDBDate(currentDate)});
  };
  const initDay=()=>{
    let date=data.USE_YMD;
    let arrDay = date.toString().substring(0, 10).split('-');
    return new Date(parseInt(arrDay[0]),parseInt(arrDay[1])-1,parseInt(arrDay[2]));
  }
  const returnDate=(date)=>{
    date.setDate(date.getDate());
    return date;
  }
  const plusDate=(date)=>{
    date.setDate(date.getDate()+1);
    return date;
  }
  const minusDate=(date)=>{
    date.setDate(date.getDate()-1);
    return date;
  }
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const convertDateToDBDate=(date)=>{
    let d = new Date(date);
    return ( d.getFullYear()+ "-"+
    (parseInt(d.getMonth()) + 1).toString().padStart(2, '0') +
    '-' +d.getDate().toString().padStart(2, '0')+" 00:00:00"
    );
  }
   // Not used
  const converDateToDMY = (date) => {
    let d = new Date(date);
    return (
      d.getDate().toString().padStart(2, '0') +
      '-' +
      (parseInt(d.getUTCMonth()) + 1).toString().padStart(2, '0') +
      '-' +
      d.getUTCFullYear()
    );
  };
  const convertDateIntToDMY = (date) => {
    if (date == '') return;
    let year = date.substring(0, 4);
    let month = date.substring(4, 6);
    let day = date.substring(6, 8);
    return day + '/' + month + '/' + year;
  };
  // end Not used
  const formatDate = (date) => {
    if (date == null) return new Date();
    let arrDay = date.substring(0, 10).split('-');
    return arrDay[2] + '-' + arrDay[1] + '-' + arrDay[0];
  };
  const formatDateToInt = (date = '') => {
    let arrD = date.split('-');
    return arrD.reverse().join('');
  };
  useEffect(() => {
    setData(props.route.params);
    setDate(new Date(props.route.params.USE_YMD));
  }, [props.route.params]);
  const onInputChange = (value, colName) => {
    setData({...data, [colName]: value});
  };
  const onValueChange = (value) => {
    setChoose(value);
  };
  navigation.addListener('blur', () => {
    setChoose(undefined);
    // setData({});
    navigation.removeListener('blur');
  });
  // console.log(JSON.stringify(props.route.params.BILL_RELEASE_CD));
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon type="AntDesign" name="left" />
          </Button>
        </Left>
        <Body>
          <Title>Sửa phát hành hóa đơn</Title>
        </Body>
        
      </Header>
      <Content padder>
        <Form>
          {/* <Item> */}
          <Label>Tên loại hóa đơn</Label>
          {/* </Item> */}
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            placeholder="Select your SIM"
            placeholderStyle={{color: '#bfc6ea'}}
            placeholderIconColor="#007aff"
            style={{width: undefined}}
            selectedValue={choose}
            onValueChange={onValueChange}>
            <Picker.Item label="Hóa đơn giá trị gia tăng" value="00001" />
            <Picker.Item label="Hóa đơn bán hàng" value="00002" />
            <Picker.Item
              label="Hóa đơn bán hàng thu phí thuế quan"
              value="00003"
            />
            <Picker.Item
              label="Phiếu xuất kho kiêm vận chuyển hàng hóa nội bộ"
              value="00004"
            />
            <Picker.Item
              label="Phiếu xuất kho gửi bán hàng đại lý"
              value="00005"
            />
          </Picker>
          <Item stackedLabel>
            <Label>Ký hiệu mẫu hóa đơn</Label>
            <Input
              value={String(data.FORM_SYMBOL)}
              onChangeText={(e) => {
                onInputChange(e, 'FORM_SYMBOL');
              }}
            />
          </Item>
          <Item stackedLabel>
            <Label>Ký hiệu hóa đơn</Label>
            <Input
              value={String(data.BILL_SYMBOL)}
              onChangeText={(e) => {
                onInputChange(e, 'BILL_SYMBOL');
              }}
            />
          </Item>
          <Item stackedLabel>
            <Label>Số lượng</Label>
            <Input
              value={String(data.FROM_NUM)}
              placeholder="Từ"
              onChangeText={(e) => {
                onInputChange(e, 'FROM_NUM');
              }}
            />
            <Input
              value={String(data.TO_NUM)}
              placeholder="Đến"
              onChangeText={(e) => {
                onInputChange(e, 'TO_NUM');
              }}
            />
          </Item>
          <Item stackedLabel>
            <Label>Ngày bắt đầu sử dụng</Label>
            <Input
              value={formatDate(data.USE_YMD)}
              placeholder="DD/MM/YYYY"
              onTouchStart={showDatepicker}
            />
          </Item>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={plusDate(initDay(date))}
              mode={mode}
              display="default"
              onChange={onChange}
            />
          )}
          <Item stackedLabel>
            <Label>Tổng số</Label>
            <Input
              value={String(data.RELEASE_COUNT)}
              onChangeText={(e) => {
                onInputChange(e, 'RELEASE_COUNT');
              }}
            />
          </Item>
        </Form>
      </Content>
      <Footer>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            bottom: 0,
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            backgroundColor: '#00b386',
            width: '100%',
          }}
          onPress={() => {
            alert('Lưu');
          }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Lưu
          </Text>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};
export default ScreenUpdate;
