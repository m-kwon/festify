import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 1,
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cornsilk',
    width: '100%',
  },
  loginButton: {
    justifyContent: 'right',
  },
  heading: {
    color: 'orange',
    fontSize: '30px',
    fontFamily: 'Courier, Helvetica Neue, Arial',
  },
  image: {
    marginLeft: '15px',
  },
}));