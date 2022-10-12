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

interface DataToDisplay {
  assetName: string,
  assetImg: string,
  buyPrice: number,
  sellPrice: number,
  spotPrice: number,
  currency: string
}

export default function Display(props: DataToDisplay) {
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
          </Card>
        );
}

