import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    // 'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    // 'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
    // 'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    // 'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    // 'Inter-Thin': require('../assets/fonts/Inter-Thin.ttf'),
  });
};