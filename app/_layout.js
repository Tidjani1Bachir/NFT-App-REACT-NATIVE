import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      // https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
      screenOptions={{
        headerStyle: {
  backgroundColor: "#001F2D",
          height:1,

          borderBottomColor:"#001F2D",
        },
        headerTintColor: '',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route. */}
      <Stack.Screen name="home" options={{}} />
    </Stack>
  );
}
