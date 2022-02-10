import { Box, Autocomplete, TextField, Alert } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStreets, getHouses, getFlats } from '../actions/addressActions';
import { selectStreet, selectHouse, selectFlat, saveAddress } from '../store/reducers/addressReducer';

export const Search = () => {
  const dispatch = useDispatch();
  const { streets,
    street,
    houses,
    house,
    flats,
    errorOfRequest } = useSelector(state => state.addressReducer);

  useEffect(() => {
    dispatch(getStreets());
  }, [dispatch]);

  return (
    <>
      <Box
        component="p"
        sx={{ fontSize: '18px',
          marginBottom: '15px' }}
      >
        Адрес
      </Box>
      <Box
        sx={{ display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row'
          },
          marginBottom: '80px' }}
      >
        <Autocomplete
          sx={{ width: {
            xs: '100%',
            sm: '400px'
          },
          marginRight: {
            xs: '0',
            sm: '5px'
          },
          marginBottom: {
            xs: '10px',
            sm: '0'
          } }}
          options={streets.filter(item => item.cityId === 1)}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          getOptionLabel={option => option.name}
          onChange={(e, itemStreet) => dispatch(selectStreet(itemStreet))}
          renderOption={(props, option) => (
            <li {...props} key={option.id}>
              {option.name}
            </li>
          )}
          renderInput={params => (
            <TextField
              {...params}
              label="Улица"
            />
          )}
        />
        <Box sx={{ display: 'flex' }}>
          <Autocomplete
            sx={{ width: 150,
              marginRight: '5px' }}
            options={houses}
            getOptionLabel={houseItem => houseItem.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={(e, itemHouse) => dispatch(selectHouse(itemHouse))}
            onOpen={() => {
              dispatch(getHouses(street.id));
            }}
            renderInput={params => (
              <TextField
                {...params}
                label="Дом"
              />
            )}
          />
          <Autocomplete
            sx={{ width: 150 }}
            options={flats}
            getOptionLabel={flatItem => flatItem.name}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            onOpen={() => {
              dispatch(getFlats(house.id));
            }}
            onChange={(e, itemFlat) => {
              dispatch(selectFlat(itemFlat));
              dispatch(saveAddress());
            }}
            renderInput={params => (
              <TextField
                {...params}
                label="Кв./офис"
              />
            )}
          />
        </Box>

      </Box>
      {errorOfRequest && <Alert severity="error">Ошибка, попробуйте ещё раз</Alert>}
    </>
  );
};
