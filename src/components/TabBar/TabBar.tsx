import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import { Home, ChartNoAxesColumnIncreasing } from "lucide-react-native";
import { useTheme } from "@/theme/useTheme";
import { TabBarItem } from "./TabBarItem";
import { TabBarAddButton } from "./TabBarAddButton";
import { isIOSDevice } from "@/utils/device";
import { useMemo } from "react";

type TabConfigItem = {
  label: string;
  Icon: any;
};

export const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const { theme } = useTheme();

  const containerStyle = useMemo(
    () => [
      styles.container,
      { backgroundColor: theme.tabBar.background },
      isIOSDevice && styles.containerIOS,
    ],
    [theme.tabBar.background]
  );

  return (
    <View style={containerStyle}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name as never);
          }
        };

        if (route.name === "AddButton") {
          return <TabBarAddButton key={route.key} onPress={onPress} />;
        }

        const config = TAB_CONFIG[route.name];

        if (!config) return null;

        return (
          <TabBarItem
            key={route.key}
            Icon={config.Icon}
            label={config.label}
            isFocused={isFocused}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 17,
    borderTopWidth: 1,
  },
  containerIOS: {
    paddingBottom: 24,
  },
});

const TAB_CONFIG: Record<string, TabConfigItem> = {
  Home: {
    label: "Home",
    Icon: Home,
  },
  Stats: {
    label: "Stats",
    Icon: ChartNoAxesColumnIncreasing,
  },
};
