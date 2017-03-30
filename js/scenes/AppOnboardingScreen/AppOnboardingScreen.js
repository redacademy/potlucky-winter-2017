import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import PageControl from 'react-native-page-control';
import AppOnboarding from './../../components/AppOnboarding';
import { colors, windowHeight, windowWidth } from './../../styles/baseStyles';
import { styles } from './styles';

class AppOnboardingScreen extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: 0,
    };
  }

  onScroll = (event) => {
    this.setState({
      currentPage: this.calculatePageOffset(event),
    });
  }

  calculatePageOffset = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;

    return Math.floor((offsetX - (windowWidth / 2)) / windowWidth) + 1;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: windowWidth, height: windowHeight - 70 }}>
          <ScrollView
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onScroll={this.onScroll}
            scrollEventThrottle={16}
          >
            <View>
              <AppOnboarding
                image={require('./../../../assets/images/foodtable.png')}
                text={'Easily organize potlucks & Share with friends and family!'}
              />
            </View>
            <View>
              <AppOnboarding
                image={require('./../../../assets/images/numberOfGuest.png')}
                text={'Pick the number of guests...'}
              />
            </View>
            <View>
              <AppOnboarding
                image={require('./../../../assets/images/checklist.png')}
                text={'Organize your menu...'}
              />
            </View>
            <View>
              <AppOnboarding
                image={require('./../../../assets/images/email.png')}
                text={'E-mail your friends...'}
              />
            </View>
            <View>
              <AppOnboarding
                image={require('./../../../assets/images/lookforward.png')}
                text={'Look forward to your potluck!'}
              />
            </View>
          </ScrollView>
          <PageControl
            style={styles.pageControl}
            numberOfPages={5}
            currentPage={this.state.currentPage}
            hidesForSinglePage
            pageIndicatorTintColor="white"
            indicatorSize={{ width: 15, height: 15 }}
            currentPageIndicatorTintColor={colors.mainBrandColor}
            onPageIndicatorPress={this.onItemTap}
          />
        </View>
      </View>
    );
  }
}

export default AppOnboardingScreen;
