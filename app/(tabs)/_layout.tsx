import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 80,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#888",
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: any;

          if (route.name === "home") iconName = "home-outline";
          else if (route.name === "yolo") iconName = "qr-code-outline";
          else if (route.name === "ginie") iconName = "settings-outline";

          return (
            <Ionicons name={iconName} size={focused ? 32: 22} color={color} />
          );
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="yolo" options={{ title: "Yolo Pay" }} />
      <Tabs.Screen name="ginie" options={{ title: "Ginie" }} />
    </Tabs>
  );
}
