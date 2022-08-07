import React from 'react';
import {TextField, Typography} from "@mui/material";

interface Props {
  onSearch: (search: string) => void;
}

function SearchBar({onSearch}: Props) {
  const [searchTimeout, setSearchTimeout] = React.useState<NodeJS.Timeout | null>(null);

  const onInput = (s: string) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    setSearchTimeout(setTimeout(() => {
      onSearch(s);
    }, 500));
  }

  return (
    <div>
      <Typography style={{marginBottom: 10}} variant="h4">Search anime</Typography>
      <TextField onChange={(e) => onInput(e.target.value)} id="outlined-basic" label="Anime name..." variant="outlined"/>
    </div>
  );
}

export default SearchBar;