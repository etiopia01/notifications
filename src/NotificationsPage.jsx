import { useState } from 'react'
import Notification from './Notification'

export default function NotificationsPage() {
	const [data, setData] = useState([
		{
			id: 1,
			name: 'Mark Webber',
			activity: 'reacted to your recent post',
			post: 'My first tournament today!',
			group: undefined,
			picture: undefined,
			avatar: './images/mw.webp',
			content: undefined,
			time: '1m ago',
			read: false,
		},

		{
			id: 2,
			name: 'Angela Grey',
			activity: 'followed you',
			post: undefined,
			group: undefined,
			picture: undefined,
			avatar: './images/ag.webp',
			content: undefined,
			time: '5m ago',
			read: false,
		},

		{
			id: 3,
			name: 'Jacob Thompson',
			activity: 'has joined your group',
			post: undefined,
			group: 'Chess Club',
			picture: undefined,
			avatar: './images/jt.webp',
			content: undefined,
			time: '1 day ago',
			read: false,
		},

		{
			id: 4,
			name: 'Rizky Hasanuddin',
			activity: 'sent you a private message',
			post: undefined,
			group: undefined,
			picture: undefined,
			avatar: './images/rh.webp',
			content:
				"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having fun",
			time: '5 days ago',
			read: true,
		},

		{
			id: 5,
			name: 'Kimberley Smith',
			activity: 'commented on your picture',
			post: undefined,
			group: undefined,
			picture: './images/chess.webp',
			avatar: './images/ks.webp',
			content: undefined,
			time: '1 week ago',
			read: true,
		},

		{
			id: 6,
			name: 'Nathan Peterson',
			activity: 'reacted to your recent post',
			post: 'five end-game strategies to improve your rating',
			group: undefined,
			picture: undefined,
			avatar: './images/np.webp',
			content: undefined,
			time: '2 weeks ago',
			read: true,
		},

		{
			id: 7,
			name: 'Anna Kim',
			activity: 'left the group',
			post: undefined,
			group: 'Chess Club',
			picture: undefined,
			avatar: './images/ak.webp',
			content: undefined,
			time: '2 weeks ago',
			read: true,
		},
	])

	const toggle = id => {
		setData(prev => {
			return prev.map(not =>
				not.id === id ? { ...not, read: !not.read } : not
			)
		})
	}

	const reset = () => {
		setData(prev => {
			return prev.map(x => {
				return { ...x, read: true }
			})
		})
	}

	return (
		<div className='notifications-page'>
			<div className='reset-bar'>
				<span>Notifications</span>
				<button onClick={reset}> Mark all as read</button>
			</div>
			<div className='notifications'>
				{data.map(item => {
					return <Notification key={item.id} data={item} toggle={toggle} />
				})}
			</div>
		</div>
	)
}
