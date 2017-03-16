import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import fontStyles from './../../styles/baseStyles'

const path = {
  appetite: require('./../../../assets/images/app.png'),
  mains: require('./../../../assets/images/Group 4.png'),
  salads: require('./../../../assets/images/salad.png'),
  desserts: require('./../../../assets/images/dess.png'),
  drinks: require('./../../../assets/images/dr.png'),
  chipIn: require('./../../../assets/images/chip-in.png'),
  talent: require('./../../../assets/images/talent.png'),
  custom: require('./../../../assets/images/custom.png')
}

const PlanningList = ({courseData}) => (
    <View style={styles.planningListWrap}>
      <View>
        <TouchableOpacity style={styles.courseButton}>
          <View style={styles.iconWrap} >
            <Image source={path.appetite} style={styles.courseIcon} />
            <View style={styles.courseQuantityBG}>
              <Text style={fontStyles.foodIndicatorText}>{courseData.Appetizers}</Text>
            </View>
          </View>
          <Text style={styles.appetizerCourseTitle}>Appetizers</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.courseButton}>
          <View style={styles.iconWrap} >
            <Image source={path.mains} style={styles.courseIcon} />
            <View style={styles.courseQuantityBG}>
              <Text style={fontStyles.foodIndicatorText}>{courseData.Mains}</Text>
            </View>
          </View>
          <Text style={styles.mainCourseTitle}>Mains</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.courseButton}>
          <View style={styles.iconWrap} >
            <Image source={path.salads} style={styles.courseIcon} />
            <View style={styles.courseQuantityBG}>
              <Text style={fontStyles.foodIndicatorText}>{courseData.Salads}</Text>
            </View>            
          </View>
          <Text style={styles.saladsCourseTitle}>Salads</Text>
        </TouchableOpacity>
      </View>
      <View>
      {courseData.Desserts >= 1 &&
        <TouchableOpacity style={styles.courseButton}>
          <View style={styles.iconWrap} >
            <Image source={path.desserts} style={styles.courseIcon} />
            <View style={styles.courseQuantityBG}>
              <Text style={fontStyles.foodIndicatorText}>{courseData.Desserts}</Text>
            </View>            
          </View>
          <Text style={styles.appetizerTitle}>Desserts</Text>
        </TouchableOpacity>
      }
      </View>        
      <View>
      {courseData.Drinks >= 1 &&
        <TouchableOpacity style={styles.courseButton}>
          <View style={styles.iconWrap} >
            <Image source={path.drinks} style={styles.courseIcon} />
            <View style={styles.courseQuantityBG}>
              <Text style={fontStyles.foodIndicatorText}>{courseData.Drinks}</Text>
            </View>            
          </View>
          <Text style={styles.appetizerTitle}>Drinks</Text>
        </TouchableOpacity>
      }
      </View>
      <View>
      {courseData.ChipIn >= 1 &&
        <TouchableOpacity style={styles.courseButton}>
          <View style={styles.iconWrap} >
            <Image source={path.chipIn} style={styles.courseIcon} />
            <View style={styles.courseQuantityBG}>
              <Text style={fontStyles.foodIndicatorText}>{courseData.ChipIn}</Text>
            </View>            
          </View>
          <Text style={styles.chipInTitle}>Chip In</Text>
        </TouchableOpacity>
      }
      </View>
      <View>
      {courseData.Talent >= 1 &&
        <TouchableOpacity style={styles.courseButton}>
          <View style={styles.iconWrap} >
            <Image source={path.talent} style={styles.courseIcon} />
            <View style={styles.courseQuantityBG}>
              <Text style={fontStyles.foodIndicatorText}>{courseData.Talent}</Text>
            </View>            
          </View>
          <Text style={styles.appetizerTitle}>Talent</Text>
        </TouchableOpacity>
      }
      </View>
      <View>
      {courseData.Custom >= 1 &&
        <TouchableOpacity style={styles.courseButton}>
          <View style={styles.iconWrap} >
            <Image source={path.custom} style={styles.courseIcon} />
            <View style={styles.courseQuantityBG}>
              <Text style={fontStyles.foodIndicatorText}>{courseData.Custom}</Text>
            </View>           
          </View>
          <Text style={styles.customTitle}>Custom</Text>
        </TouchableOpacity>
      }
      </View>
    </View>
);

export default PlanningList;
