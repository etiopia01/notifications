export default function Notification({ data, toggle }) {
	return (
		<div
			onClick={() => toggle(data.id)}
			className={`notification ${!data.read ? 'unread' : ''}`}
		>
			<img className='avatar' src={data.avatar} alt='' />
			<div className='notification-center'>
				<p className='paragraph'>
					<span className='name'>{data.name}</span>{' '}
					<span className='activity'>{data.activity} </span>{' '}
					{data.group && <span className='group'>{data.group} </span>}
					{data.post && <span className='post'>{data.post} </span>}{' '}
					{!data.read && <div className='icon'></div>}
				</p>
				<span className='time'>{data.time}</span>
				{data.content && <div className='content'>{data.content}</div>}
			</div>
			{data.picture && <img className='picture' src={data.picture} />}
		</div>
	)
}
