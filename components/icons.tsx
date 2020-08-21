import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
	faAuth0Icon,
	faGraphQLIcon,
	faHerokuIcon,
	faNextIcon,
	faVercelIcon,
	faTypeScriptIcon
} from '../lib/fas-custom-integration';
import { ObjectId } from 'mongodb';
interface MappingProps {
	_id: string;
	href: string;
	name: string;
	icon: IconProp;
}

const iconLinks: MappingProps[] = [
	{
		_id: new ObjectId().toHexString(),
		href: 'https://auth0.com/',
		name: 'auth0',
		icon: faAuth0Icon
	},
	{
		_id: new ObjectId().toHexString(),
		href: 'https://www.graphql.com/',
		name: 'graphql',
		icon: faGraphQLIcon
	},
	{
		_id: new ObjectId().toHexString(),
		href: 'https://www.heroku.com/',
		name: 'heroku',
		icon: faHerokuIcon
	},
	{
		_id: new ObjectId().toHexString(),
		href: 'https://nextjs.org/',
		name: 'next',
		icon: faNextIcon
	},
	{
		_id: new ObjectId().toHexString(),
		href: 'https://vercel.com/',
		name: 'vercel',
		icon: faVercelIcon
	},
	{
		_id: new ObjectId().toHexString(),
		href: 'https://twitter.com/Dopamine_Driven',
		name: 'typescript',
		icon: faTypeScriptIcon
	}
];

// type CardIconProps = {
// 	twitter: string;
// 	linkedin: string;
// 	react: string;
// 	heroku: string;
// 	vercel: string;
// };

const Icons = () => {
	console.log(typeof faHerokuIcon);
	console.log(typeof faVercelIcon);
	const iconMap = iconLinks.map(link => (
		<a
			key={link._id}
			aria-label={link.name}
			target='__blank'
			href={link.href}
			className='bg-black text-white hover:text-white hover:bg-iconHover transition-colors leading-normal duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 pt-1 rounded-full focus:outline-none'
		>
			<FontAwesomeIcon
				icon={link.icon}
				className='flex align-middle text-center font-extrabold text-1xl pb-1'
				size='lg'
			/>
		</a>
	));
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 col-gap-8 row-gap-6 align-middle text-center'>
			<ul className='align-middle'>
				<li className='align-middle'>
					{iconMap}
				</li>
			</ul>
		</div>
	);
};

export default Icons;

// CUSTOM ICONS https://medium.com/@nsisodiya/hacking-font-awesome-for-custom-svg-icons-ea762118fa7b
