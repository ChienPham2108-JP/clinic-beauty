import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { type ReactNode } from 'react';

const useStyles = makeStyles({
  widgetWrap: {
    padding: '58px 28px 0 49px',
    background: '#FFFFFF',
    boxShadow: '-2px 4px 31px 9px #F2F4FF',
    borderRadius: '25px',
    marginBottom: '83px',
  },
  widgetHeading: {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '20px',
    color: '#091156',
  },
  widgetContent: {},
});

interface IWidgetProps {
  widgetContent: ReactNode;
  margin: string;
  widgetHeading: string;
  padding: string;
}

const Widget = ({ widgetContent, margin, widgetHeading, padding }: IWidgetProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.widgetWrap} style={{ padding }}>
      <Box className={classes.widgetHeading} style={{ margin }}>
        {widgetHeading}
      </Box>
      <Box className={classes.widgetContent}>{widgetContent}</Box>
    </Box>
  );
};

export default Widget;
