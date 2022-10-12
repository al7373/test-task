import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SellIcon from '@mui/icons-material/Sell';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';

interface DataToDisplay {
  assetName: string,
  assetImg: string,
  buyPrice: number,
  sellPrice: number,
  spotPrice: number,
  currency: string,
  loading: boolean,
  onRefresh: Function,
	success: boolean
}

export default function Display(props: DataToDisplay) {

    function handleClickOnRefreshBtn(){
      props.onRefresh();
    }

		const buttonSx = {
			...(props.success && {
				bgcolor: green[500],
				'&:hover': {
					bgcolor: green[700],
				},
			}),
		};

    return (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={ props.assetImg }
                alt={ props.assetName }
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  { props.assetName }
                </Typography>
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <AttachMoneyIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Buy" secondary={ props.buyPrice + " " + props.currency } />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <SellIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Sell" secondary={ props.sellPrice + " " + props.currency } />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <PriceCheckIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Spot" secondary={ props.spotPrice + " " + props.currency } />
                    </ListItem>
                  </List>
              </CardContent>
            </CardActionArea>
						<CardActions>
							<Box sx={{ m: 1, position: 'relative', display: 'flex', justifyContent: 'right' }}>
								<Button
									variant="contained"
									sx={buttonSx}
									disabled={ props.loading }
									onClick={ handleClickOnRefreshBtn }
								>
									Refresh
									{props.loading && (
										<CircularProgress
											size={24}
											sx={{
												color: green[500],
												position: 'absolute',
												top: '50%',
												left: '50%',
												marginTop: '-12px',
												marginLeft: '-15px',
											}}
										/>
									)}
								</Button>
							</Box>
						</CardActions>
          </Card>
        );
}




