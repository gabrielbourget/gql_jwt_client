import { StyleSheet } from 'aphrodite';
import { IEmbeddableResourceBrowserProps } from './helpers';
import { ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';

export const styleGen = (props: IEmbeddableResourceBrowserProps, themeInfo: ThemeInfo) => {
  const { resources } = props;
  const areThereResources = (resources.children && (resources.children.length > 0)) ? true : false;

  return StyleSheet.create({
    componentCradle: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
    },
    noContentFallbackText: {
      ...themeInfo.typography.noContentFallbackText,
      textAlign: 'center',
    },
    resourcesContentCradle: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: areThereResources ? 'flex-start' : 'center',
      overFlowY: 'auto',
    }
  });
}
