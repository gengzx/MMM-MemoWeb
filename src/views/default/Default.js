'use strict';

import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearAllIcon from '@material-ui/icons/ClearAll';

import Snackbar from '@material-ui/core/Snackbar';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './Default.less';

import { Http } from "utils"

class Default extends Component {

	constructor(props) {
		super(props)
		this.state = {
			title:"备忘",
			message:"",
			level:"INFO",
			alert:"",
			data:[]
        }
	}

	componentDidMount(){
		this.loadData()
	}

	componentWillUnmount() {

	}

	componentDidUpdate(nextProps) {

    }

	loadData(){
		Http.request(`api/memos`,{},data => {
			data.sort((a, b) => {
				if (a.timestamp < b.timestamp) {         
					return 1;
				  }
				if (a.timestamp > b.timestamp) {
					return -1;
				}
				return 0
			});
			this.setState({data})
		},{method:"GET"})
	}

	onAdd = () => {
		const { title, message, level } = this.state;
		Http.request(`api/AddMemo?memoTitle=${title}&item=${message}&level=${level}`,{},res => {
			if(res.status){
				this.showMsg("操作成功！")
			}else{
				this.showMsg("操作失败！")
			}
			this.loadData()
		},{method:"GET"})

		Http.request(`api1/AddMemo?memoTitle=${title}&item=${message}&level=${level}`,{},res => {},{method:"GET"})
    }
	
	onRemove = (removeIndex) => {
		const { title, message, level } = this.state;
		const removeItem = removeIndex == null ? "ALL" : removeIndex

		Http.request(`api/RemoveMemo?memoTitle=${title}&item=${removeItem}`,{},res => {
			if(res.status){
				this.showMsg("操作成功！")
			}else{
				this.showMsg("操作失败！")
			}
			this.loadData()
		},{method:"GET"})

		Http.request(`api1/RemoveMemo?memoTitle=${title}&item=${removeItem}`,{},res => {},{method:"GET"})
    }

	showMsg = (alert) => {
		this.setState({alert},() => setTimeout(() => this.setState({alert:""}), 2500))
    }

	openMessage(msg){
		this.setState({msg})
	}

	closeMessage(){
		this.setState({msg:""})
	}

   	render() {

        const { title, message, level, alert, data } = this.state;

      	return (
			<div className="page-default">  
					
				<AppBar position="static">
					<Toolbar variant="dense">魔镜备忘</Toolbar>
				</AppBar>

				<Container className="container">

					<div style={{overflow:"auto", margin:"20px 0",flex:1}} >
						<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
							{
								data.map((i, idx) => {
									const { memoTitle, item, timestamp, level } = i
									
									if(memoTitle == title){
										return(
											<ListItem key={idx} >
												{/* <ListItemAvatar>
													<Avatar style={{ width: 14, height: 14, background:"#f50057" }}> </Avatar>
												</ListItemAvatar> */}
												<ListItemText primary={item} secondary={new Date(timestamp).format("yyyy-MM-dd hh:mm:ss")} style={{color: level == "INFO" ? "#3f51b5" : "#f50057"}}/>
												{/* <ListItemText primary={timestamp} secondary="Jan 9, 2014" width={100} style={{width:100}} /> */}
												<IconButton  onClick={() => this.onRemove(idx+1) }> <DeleteIcon /> </IconButton>
											</ListItem>
										)
									}
								})
							}
						</List>
					</div>
					<div style={{height:120}}>
						<TextField 
							multiline
							value={message}
							rows={4}
		   					label="备忘" 
						   	variant="outlined" 
						  	className="message" 
							onChange={ e => this.setState({message:e.target.value}) }
						/>
						<RadioGroup row value={level} className="message-type" onChange={ e => this.setState({level:e.target.value}) }>
							<FormControlLabel value="INFO" control={<Radio color="primary" />} label="普通"  />
							<FormControlLabel value="WARNING" control={<Radio/>} label="重要" />
						</RadioGroup>
					</div>
					<div style={{height:130}}>
						<Fab color="primary" className="button send-button" onClick={this.onAdd} >
							<SendIcon />
						</Fab>
						<IconButton  onClick={() => this.openMessage("将删除全部数据，是否确定？")} >
							<ClearAllIcon />
						</IconButton>
					</div>
				</Container>
				{ 
				alert && 
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					open={true}
					autoHideDuration={6000}
					message={alert}
				/>
				}

				<Dialog
					open={!!this.state.msg}
					onClose={() => this.closeMessage()}
				>
					<DialogTitle>系统提示！</DialogTitle>
					<DialogContent>
						<DialogContentText>{this.state.msg}</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => this.onRemove(null) }>确定</Button>
						<Button onClick={() => this.closeMessage()}>取消</Button>
					</DialogActions>
				</Dialog>
				
			</div>
      	);
   	}
}

export default Default;

