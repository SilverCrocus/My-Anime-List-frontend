import React, {useEffect} from 'react';
import SearchBar from "./components/SearchBar";
import AnimeCardContainer from "./components/AnimeContainer";
import searchAnime, {responseType} from "./api/Api";
import {Button, CircularProgress} from "@mui/material";

function App() {
  const [result, setResult] = React.useState<responseType>();
  const [prevSearch, setPrevSearch] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    searchAnime("").then(res => {
      setResult(res);
      setLoading(false);
    })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const onSearch = (search: string) => {
    setLoading(true);

    searchAnime(search).then(res => {
      setResult(res);
      setPrevSearch(search);
      setLoading(false);
    })
      .catch(() => {
        setLoading(false);
      });
  }

  const onLeftClick = () => {
    if (!result || result.pagination.current_page === 1) return;

    setLoading(true);

    searchAnime(prevSearch, result.pagination.current_page - 1).then(res => {
      setResult(res);
      setLoading(false);
    })
      .catch(() => {
        setLoading(false);
      });
  }

  const onRightClick = () => {
    if (!result || !result.pagination.has_next_page) return;

    setLoading(true);

    searchAnime(prevSearch, result.pagination.current_page + 1).then(res => {
      setResult(res)
      setLoading(false);
    })
      .catch(() => {
        setLoading(false);
      });
  }

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "5%",
      flexDirection: "column"
    }}>
      <div style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center"
      }}>
        <Button onClick={onLeftClick} disabled={!result || result.pagination.current_page === 1}>Left Page</Button>
        <SearchBar onSearch={(search) => onSearch(search)}/>
        <Button onClick={onRightClick} disabled={!result || !result.pagination.has_next_page}>Right page</Button>
      </div>
      {!result || loading ? <CircularProgress style={{marginTop: 30}}/> : <AnimeCardContainer cardsList={result.data}/>}
    </div>
  );
}

export default App;
