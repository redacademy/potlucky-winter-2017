const newPotluckInitialState = {
  guestNumber: 15,
  potluckFood: {
    Appetizers: 0,
    Mains: 0,
    Salads: 0,
    Desserts: 0,
    Drinks: 0,
    ChipIn: 0,
    Talent: 0,
    Custom: 0,
  }
}
export default (state = newPotluckInitialState, action) => {
  switch (action.type) {
    case 'changeNumberofGuests':
      return { ...state,
        guestNumber: action.payload
      }
    case 'ADD_POTLUCK_ITEM':
      if (state.guestNumber) {
        switch (action.payload) {
          case 'Appetizers':
            return { ...state,
              guestNumber: state.guestNumber - 1,
              potluckFood: { ...state.potluckFood,
                Appetizers: state.potluckFood[action.payload] + 1
              }
            }
          case 'Mains':
            return { ...state,
              guestNumber: state.guestNumber - 1,
              potluckFood: { ...state.potluckFood,
                Mains: state.potluckFood[action.payload] + 1
              }
            }
          case 'Salads':
            return { ...state,
              guestNumber: state.guestNumber - 1,
              potluckFood: { ...state.potluckFood,
                Salads: state.potluckFood[action.payload] + 1
              }
            }
          case 'Desserts':
            return { ...state,
              guestNumber: state.guestNumber - 1,
              potluckFood: { ...state.potluckFood,
                Desserts: state.potluckFood[action.payload] + 1
              }
            }
          case 'Drinks':
            return { ...state,
              guestNumber: state.guestNumber - 1,
              potluckFood: { ...state.potluckFood,
                Drinks: state.potluckFood[action.payload] + 1
              }
            }
          case 'ChipIn':
            return { ...state,
              guestNumber: state.guestNumber - 1,
              potluckFood: { ...state.potluckFood,
                ChipIn: state.potluckFood[action.payload] + 1
              }
            }
          case 'Talent':
            return { ...state,
              guestNumber: state.guestNumber - 1,
              potluckFood: { ...state.potluckFood,
                Talent: state.potluckFood[action.payload] + 1
              }
            }    
          case 'Custom':
            return { ...state,
              guestNumber: state.guestNumber - 1,
              potluckFood: { ...state.potluckFood,
                Custom: state.potluckFood[action.payload] + 1
              }
            }                                                                   
          default:
            return state;
        }
      }
    default:
      return state;
  }
}