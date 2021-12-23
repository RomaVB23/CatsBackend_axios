import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // All
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  blockView: {
    flexDirection: 'row',
    height: 160,
    borderRadius: 16,
    marginBottom: 25,
    marginTop: 10,
    marginHorizontal: 25,
    backgroundColor: '#F5F5FA',
  },
  shadow: {
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.39,
    shadowRadius: 13.3,
    elevation: 13,
  },
  blockImage: {
    width: 160,
    height: 160,
    borderRadius: 16,
    marginRight: 6,
  },
  blockViewText: {
    marginBottom: 1,
  },
  blockTextName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    width: '32%',
  },
  blockText: {
    fontFamily: 'Avenir',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 10,
    width: '32%',
  },

  //Favorite

  image: {
    width: 318,
    height: 287,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 26,
    fontWeight: '600',
    color: 'white',
  },
  h1: {
    marginTop: 30,
    // fontFamily: 'Lato',
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 31,
  },
  p: {
    marginTop: 31,
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '500',
    marginHorizontal: 31,
  },

  //  кнопки
  buttonArea: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 18.3,
    elevation: 13,
  },
  imageView: {
    alignItems: 'center',
    marginTop: 15,
  },
  // Favorite
  viewImageFavorite: {
    alignItems: 'center',
    marginVertical: 10,
  },
  imageFavorite: {
    width: '95%',
    height: 350,
    borderRadius: 15,
  },
  favoritePage: {
    backgroundColor: '#FED8B1'
  },
});
