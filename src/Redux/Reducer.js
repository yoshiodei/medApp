const initialState ={  
    patients: [
        {
          key: '1',
          name: 'Yoshi Odei',
          location: 'Awoshie'
        },
        {
          key: '2',
          name: 'Emmanuel Sintim',
          location: 'Pokuase'
        },
        {
          key: '3',
          name: 'Eric Lartey',
          location: 'Dome'
        },
        {
          key: '4',
          name: 'Kofi Boakye',
          location: 'Kwashieman'
        },
        {
          key: '5',
          name: 'Nana Danso',
          location: 'Osu'
        },
        {
          key: '6',
          name: 'Cynthia Mills',
          location: 'Labadi'
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    };
};