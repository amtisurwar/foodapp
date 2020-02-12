import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';
import { Dimensions } from 'react-native';
// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 200;
const RECIPE_ITEM_MARGIN = 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 5,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontFamily: 'FallingSky',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
    fontWeight:'bold'
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  },
  HomeBtnIcon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,

  },
  btnIcon: {
    //flex: 1,
    height: 35,
    width: 35,
    // resizeMode: 'cover'
  },
  btnText: {
    flex: 1,
    fontWeight: 'bold',
    color: '#A9A9A9',
    fontSize: 9,
    // marginLeft:-10
  },
  badgeIcon: { 
    height: 17,
    // borderRadius:8,
    // width: 16,
    flex: 1,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: -4,
    top: -2 ,
    justifyContent:'center'
  },
  badgeText: {
    // flex: 1,
    alignSelf: 'center', 
    lineHeight: 14,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    //  width: 30,
    fontSize: 12
  },
  badgeView: {
    right: 8, 
    width: 40
  }
});

export default styles;
