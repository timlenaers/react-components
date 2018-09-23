declare module '@thibmaek/rn-playground-wrapper' {

  import { ComponentClass } from 'react';

  import { StyleProp, ViewStyle } from 'react-native';

  interface Props {
    /* Style to pass to the underlying View that wraps your current component */
    componentContainerStyle?: Object,

    /* A collection of components to pass from an import all */
    components: string[],

    /*
      Component state to pass down via props
      The key must have the same value as your component name.
      So with a component ListItem passed:
    */
    componentState?: Object,

    /* Style to pass to the underlying ScrollView */
    contentContainerStyle?: StyleProp<ViewStyle>,

    /* Specific component to exclude from the passed components */
    exclude?: string,

    pickerStyle?: StyleProp<ViewStyle>,

    /* Title which appears above the Picker component */
    title?: string,

    /* Style to pass to the title Text view */
    titleStyle?: StyleProp<ViewStyle>,
  }

  const PlaygroundWrapper: ComponentClass<Props>
  export default PlaygroundWrapper;

}