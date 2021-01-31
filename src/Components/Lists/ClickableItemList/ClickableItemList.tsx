// -> Beyond Codebase
import React, { useContext } from 'react';
import { css } from 'aphrodite';
// -> Within Codebase
import ClickableListItem from '../../ClickableListItem/ClickableListItem';
import IconButton from '../../Button/Variants/IconButton/IconButton';
import { MoreDetailsIcon } from '../../VisualUtilities/IconPresets';
import { UIContext, ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
// -> Within Component
import { styleGen } from './ClickableItemListStyles';
import { calibrateComponent, IClickableItemListProps } from './helpers';

const ClickableItemList: React.FC<IClickableItemListProps> = (props) => {
  const {
    items, listTitle, navigateToMoreDetails, navigateToItem,
    showItemQuantity, moreDetailsAvailable, moreDetailsIcon,
    noContentFallbackMessage
  } = props;
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const styles = styleGen(props, themeInfo);
  const {
    componentCradleStylechain, listTitleTextStylechain, titleBarCradleStylechain,
    titleBarRightCradleStylechain, itemsListCradleStylechain
  } = calibrateComponent(props, themeInfo, styles);

  return (
    <div className={componentCradleStylechain}>
      <div className={titleBarCradleStylechain}>
        <p className={listTitleTextStylechain}>{listTitle}</p>
        <div className={titleBarRightCradleStylechain}>
          {
            // - TODO: -> Use <Indicator /> component here.
            (showItemQuantity && items && items.children) ? (
              <>
                <div className={css(styles.quantityTotal)}>{items.children.length}</div>
                <div style={{ marginRight: themeInfo.distance.two }}></div>
              </>
            ) : undefined
          }
          {
            moreDetailsAvailable ? (
              <IconButton
                icon={
                  moreDetailsIcon ?
                  moreDetailsIcon :
                  <MoreDetailsIcon  color={themeInfo.palette.black} size={themeInfo.styles.standardIconSize} />
                }
                onClick={navigateToMoreDetails}
              />
            ) : undefined
          }
        </div>
      </div>
      <div className={itemsListCradleStylechain}>
        {
          (items && items.children && (items.children.length > 0)) ? (
            <>
              {
                items.children.map((item: any) => {
                  const { name, id } = item;

                  return (
                    <ClickableListItem
                      key={id}
                      listItemText={name}
                      onClick={() => navigateToItem(id)}
                    />
                  );
                })
              }
            </>
          ) : (
            <p className={css(styles.noContentFallbackText)}>
              {
                noContentFallbackMessage ? noContentFallbackMessage : 'No resources were provided.'
              }
            </p>
          )
        }
      </div>
    </div>
  );
}

export default ClickableItemList;
