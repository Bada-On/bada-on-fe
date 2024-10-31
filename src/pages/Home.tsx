import React, { useState } from 'react';
import styled from 'styled-components';

import BottomSheet from '../components/BottomSheet';
import Map from '../components/common/Map';
import RollList from '../components/RollList';
import Search from '../components/Search';
import SearchBar from '../components/SearchBar';

function Home() {
  const [isSearchPage, setIsSearchPage] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <Container>
      <Header>
        {isSearchPage ? (
          <CloseButton onClick={() => setIsSearchPage(false)}>X</CloseButton>
        ) : null}
        <SearchBar
          onClick={() => !isSearchPage && setIsSearchPage(prev => !prev)}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </Header>
      {isSearchPage ? (
        <Search searchValue={searchValue} />
      ) : (
        <>
          <RollList />
          <Map />
          <BottomSheet>
            <div>Hello World</div>
          </BottomSheet>
        </>
      )}
    </Container>
  );
}

const Container = styled.div``;

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  z-index: 2;
`;

const CloseButton = styled.div`
  position: relative;
  display: flex;
  padding-left: 16px;
`;

export default Home;
