import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
	faGithub,
	faLinkedin,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';

interface Props {
	href: string;
	name: string;
	icon: IconProp;
}

const iconLinks: Props[] = [
	{
		href: 'https://github.com/DopamineDriven',
		name: 'github',
		icon: faGithub
	},
	{
		href: 'https://www.linkedin.com/in/asross/',
		name: 'linkedin',
		icon: faLinkedin
	},
	{
		href: 'https://twitter.com/Dopamine_Driven',
		name: 'twitter',
		icon: faTwitter
	}
];

const SocialMediaIcons = () => {
	const iconMap = iconLinks.map(link => (
		<a
			key={link.name}
			aria-label={link.name}
			target='__blank'
			href={link.href}
			className='bg-black text-white hover:text-cimaRed transform transition-colors duration-500 shadow-lg font-lg items-center justify-center align-center outline-none focus:outline-none rounded-full py-1 px-3 inline-block text-center'
		>
			<FontAwesomeIcon icon={link.icon} fontSize='xl' />
		</a>
	));
	return (
		<div className='flex flex-wrap my-1'>
			<ul className='flex flex-col lg:flex-row list-none lg:mx-auto'>
				<li>{iconMap}</li>
			</ul>
		</div>
	);
};

export default SocialMediaIcons;

// faGoogle,
// faLinkedin,
// faSnapchat
