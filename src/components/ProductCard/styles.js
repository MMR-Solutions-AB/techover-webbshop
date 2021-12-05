import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		productCard: {
			position: 'relative',
			width: '100%',
			height: 140,
			backgroundColor: '#fff',
			boxShadow: '0px 2px 1px 0px rgba(0, 0, 0, 0.1)'
		},
		productCardFlex: {
			display: 'flex',
			justifyContent: 'space-between',
			position: 'relative',
			height: '100%',
			width: '90%',
			margin: 'auto'
		},
		quantityCounter: {
			position: 'absolute',
			left: 0,
			top: 0,
			overflow: 'hidden',
			borderRadius: '8px'
		},
		rotated: {
			width: '80px',
			height: '80px',
			top: '-40px',
			left: '-40px',
			backgroundColor: '#00c896',
			transform: 'rotateZ(45deg)',
			position: 'relative'
		},
		quantity: {
			position: '-webkit-sticky',
			position: 'absolute',
			left: 0,
			top: 0,
			height: '40px',
			padding: '5px',
			overflow: 'hidden',
			color: '#fff'
		},
		informationContainer: {
			position: 'relative',
			width: '80%',
			left: 0
		},
		info: {
			display: 'flex',
			justifyContent: 'flex-start',
			alignItems: 'center',
			paddingLeft: '20px',
			width: '80%',
			left: '0px',
			height: '120px',
			margin: 0,
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)'
		},
		img: {
			width: '65px',
			marginRight: '20px',
			objectFit: 'contain'
		},
		details: {
			left: 0,
			float: 'left'
		},
		title: {
			fontSize: '17px',
			lineHeight: 'normal'
		},
		detailMargin: {
			margin: 0,
			marginBottom: 5
		},
		buttons: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			position: 'absolute',
			right: '0px',
			height: '100%'
		},
		button: {
			color: '#00c896'
		},
		buttonDisabled: {
			color: '#f7f8fa'
		},
		divider: {
			transform: 'translateY(-1px)',
			width: '90%',
			margin: 'auto'
		}
	})
);

export default useStyles;
