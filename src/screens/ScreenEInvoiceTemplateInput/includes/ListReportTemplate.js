import React from 'react';
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, { abs, add, call, clockRunning, cond, eq, not, set, useCode } from "react-native-reanimated";
import { Body, Left, Thumbnail, ListItem, List, Text } from 'native-base';
import styles from '../styles/style';
import { PanGestureHandler, State, TouchableNativeFeedback } from 'react-native-gesture-handler';
const { width } = Dimensions.get("window");
const snapPoints = [-width, 100, 0];
export default function ListReportTemplate(props) {
    const { gestureHandler, translation, velocity, state } = usePanGestureHandler();
    const translateX = useValue(0);
    const offsetX = useValue(0);
    const height = useValue(1);
    const deleteOpacity = useValue(1);
    const clock = useClock();
    const to = snapPoint(translateX, velocity.x, snapPoints);
    const shouldRemove = useValue(0);
    useCode(
        () => [
            cond(
                eq(state, State.ACTIVE),
                set(translateX, add(offsetX, clamp(translation.x, -9999, minus(offsetX))))
            ),
            cond(eq(state, State.END), [
                set(translateX, timing({ clock, from: translateX, to })),
                set(offsetX, translateX),
                cond(eq(to, -width), set(shouldRemove, 1)),
            ]),
            cond(shouldRemove, [
                set(height, timing({ from: HEIGHT, to: 0 })),
                set(deleteOpacity, 0),
                cond(not(clockRunning(clock)), call([], onSwipe)),
            ]),
        ],
        [onSwipe]
    );
    return (
        <Animemated.View>
            <View>
                <TouchableWithoutFeedback onPress={() => shouldRemove.setValue(1)}>
                    <Action x={abs(translateX)} {...{ deleteOpacity }} />
                </TouchableWithoutFeedback >
                <PanGestureHandler>
                    <Animated.View style={{ height, transform: [{ translateX }] }}>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={require('../../../assets/images/list.png')} />
                                </Left>
                                <Body>
                                    <Text style={styles.textListNameCompany}>{props.CUSTOMER_NM} </Text>
                                </Body>
                            </ListItem>
                        </List>
                    </Animated.View>
                </PanGestureHandler>
            </View>
        </Animemated.View>
    );

}
