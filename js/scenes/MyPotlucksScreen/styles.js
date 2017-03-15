import { StyleSheet } from 'react-native'
import { colors, windowHeight as height } from '../../styles/baseStyles'


export default StyleSheet.create({
  container: {
    flex: 1,
  },
  placeholderText: {
    flex: 1,
    marginTop: 100,
  },
  listView: {
    height
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#696969',
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#FFF'

  },
  leftText: {
    color: colors.mainBrandColor,
    fontWeight: 'bold',
    fontSize: 20,
  },
  rightText: {
    color: colors.secondaryBtnColor,
    fontWeight: 'bold',
    fontSize: 20
  }
});