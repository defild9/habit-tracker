import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BASE_SCREEN_OPTIONS } from "./utils/navigation.utils";
import { OnboardingScreen } from "../screens/OnboardingScreen";
import { TabNavigation } from "./TabNavigation";

const RootStack = createNativeStackNavigator<RootStackParamList>();

type Props = {
  initRoute?: keyof RootStackParamList;
};

export const AppNavigation = ({ initRoute }: Props) => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={initRoute}>
        <RootStack.Group screenOptions={BASE_SCREEN_OPTIONS}>
          <RootStack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
          />
          <RootStack.Screen
            name="TabNavigation"
            component={TabNavigation}
            options={{ headerShown: false }}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
