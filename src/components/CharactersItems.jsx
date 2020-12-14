import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from 'react';

// components
import Search from './Search';

// custom hooks
import useCharacters from '../hooks/useCharacters.js';

const API = 'https://rickandmortyapi.com/api/character/';

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((items) => items.id !== action.payload.id),
          action.payload,
        ],
      };
    case 'REMOVE_FROM_FAVORITE':
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((items) => items.id !== action.payload.id),
        ],
      };

    default:
      return state;
  }
};

const CharactersItems = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const characters = useCharacters(API);

  const handleAdd = (favorite) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
  };

  const handleRemove = (favorite) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITE', payload: favorite });
  };

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  // const filteredUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filteredCharacters = useMemo(
    () =>
      characters.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <>
      <div className='container'>
        <h1>Favorites</h1>
        <div className='row mt-3'>
          {favorites ? (
            favorites.favorites.map((favorite) => (
              <div
                className='col col-lg-3 w-100 my-3 d-flex  justify-content-center align-items-center'
                key={favorite.id + 1}
              >
                <div className='card shadow-sm' style={{ width: '18rem' }}>
                  <img
                    src={favorite.image}
                    className='card-img-top'
                    alt='Character'
                  />
                  <div className='card-body d-flex justify-content-center align-items-center'>
                    <span
                      className='card-text text-center'
                      style={{ fontSize: 17 }}
                    >
                      {favorite.name}
                    </span>
                  </div>
                  <button
                    className='btn btn-outline-danger custom-button'
                    type='button'
                    onClick={() => handleRemove(favorite)}
                  >
                    ☆ Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

      <div className='container'>
        <div className='row mt-3'>
          {filteredCharacters.map((character) => (
            <div
              className='col col-lg-3 w-100 my-3 d-flex  justify-content-center align-items-center'
              key={character.id}
            >
              <div className='card shadow-sm' style={{ width: '18rem' }}>
                <img src={character.image} className='card-img-top' alt='...' />
                <div className='card-body d-flex justify-content-center align-items-center'>
                  <span
                    className='card-text text-center'
                    style={{ fontSize: 17 }}
                  >
                    {character.name}
                  </span>
                </div>
                <button
                  className='btn btn-outline-success custom-button'
                  type='button'
                  onClick={() => handleAdd(character)}
                >
                  ⭐️ ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CharactersItems;
