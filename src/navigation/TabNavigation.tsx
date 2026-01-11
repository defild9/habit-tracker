import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import HomeScreen from "@/screens/HomeScreen";
import StatsScreen from "@/screens/StatsScreen";
import { TabBar } from "@/components/TabBar/TabBar";

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigation = () => {
  const { t } = useTranslation();

  const renderTabBar = useCallback(
    (props: BottomTabBarProps) => <TabBar {...props} />,
    []
  );

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={renderTabBar}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AddButton" component={HomeScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
    </Tab.Navigator>
  );
};
