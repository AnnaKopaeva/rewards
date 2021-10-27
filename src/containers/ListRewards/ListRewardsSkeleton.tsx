import React from "react";

import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Avatar from "../../components/Avatar";
import rewards from "../../mockedData/rewards";

import styles from "./ListRewards.styles";

const ListRewardsSkeleton: React.FC = () => (
  <Box>
    {rewards.map((item) => (
      <Box key={item.id} sx={styles.rewardItem}>
        <Skeleton variant="circular" height={40}>
          <Avatar />
        </Skeleton>
        <Box sx={{ ...styles.rewardDetails, width: "80%" }}>
          <Skeleton width="60%">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="20%" />
          <Skeleton height={40} />
        </Box>
      </Box>
    ))}
  </Box>
);

export default ListRewardsSkeleton;
