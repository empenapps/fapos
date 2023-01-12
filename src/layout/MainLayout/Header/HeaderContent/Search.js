// material-ui
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

// assets
import { SearchOutlined } from '@ant-design/icons';

import Clock from 'react-live-clock';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = () => (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
        <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
            <OutlinedInput
                disabled
                size="small"
                id="header-search"
                startAdornment={
                    <InputAdornment position="start" sx={{ mr: -0.5 }}>
                           Clock Time  <Clock format={ ' : HH:mm:ss'} ticking={true} timezone={'Asia/Kuwait'} />
                    </InputAdornment>
                }
                aria-describedby="header-search-text"
                inputProps={{
                    'aria-label': 'weight'
                }}
                placeholder=""
            />
        </FormControl>
    </Box>
);

export default Search;
