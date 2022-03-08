import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// icons
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

const BulbIcon = styled(LightbulbOutlinedIcon)`
    font-size:120px ;
    color:#f1f1f1 ;
`

const Text = styled(Typography)`
    font-size:22px ;
    color:#80868b ;
`
const BoxStyle = styled(Box)`
    display:flex ;
    flex-direction:column ;
    margin-top : 20vh ;
    align-items:center ;
`
const EmptyNotes = () => {
  return (
    <BoxStyle>
      <BulbIcon />
      <Text>Notes you add appear here</Text>
    </BoxStyle>
  );
};

export default EmptyNotes;
