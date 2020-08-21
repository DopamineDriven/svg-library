import {
	library,
	IconDefinition,
	IconLookup
} from '@fortawesome/fontawesome-svg-core';

export interface CustomIconConstruct extends IconDefinition, IconLookup {}

export const faAuth0Icon: CustomIconConstruct = {
	prefix: 'fac',
	iconName: 'auth-icon',
	icon: [
		200,
		200,
		[],
		'#000000',
		'M158.778 161.346L136.333 99.7192L195.088 61.6425H122.46L100.013 0.0174216L100.006 0.000696864H172.645L195.098 61.6355L195.099 61.6341L195.118 61.6251C208.157 97.3812 194.728 138.05 158.778 161.345V161.346ZM41.2409 161.346L41.2229 161.357L99.9939 199.445L158.778 161.347L100.013 123.259L41.2417 161.346H41.2409ZM4.91722 61.6265C-8.80913 99.3185 7.12421 139.257 41.2299 161.353L41.2354 161.334L63.6843 99.7108L4.94143 61.6411H77.5528L100.001 0.0167247L100.006 0H27.3622L4.91643 61.6265H4.91722Z'
	]
}

export const faGraphQLIcon: CustomIconConstruct = {
	prefix: 'fac',
	iconName: 'graphql-icon',
	icon: [
		200,
		230,
		[],
		'none',
		'M20.4618 172.019L12.4395 167.388L101.809 12.5996L109.831 17.2313L20.4618 172.019Z M10.6035 155.021H189.342V164.285H10.6035V155.021Z M103.544 211.843L14.1406 160.225L18.7723 152.203L108.175 203.821L103.544 211.843ZM181.208 77.3125L91.8047 25.6942L96.4364 17.6719L185.839 69.2902L181.208 77.3125Z M18.7977 77.2777L14.166 69.256L103.569 17.6377L108.201 25.6595L18.7977 77.2777Z M179.56 172.021L90.1903 17.2333L98.2126 12.6016L187.582 167.39L179.56 172.021ZM17.6914 63.1133H26.9548V166.35H17.6914V63.1133Z M173.047 63.1133H182.31V166.35H173.047V63.1133Z M101.966 207.923L97.9199 200.915L175.677 156.021L179.722 163.029L101.966 207.923Z M194.588 169.363C189.231 178.682 177.289 181.863 167.97 176.506C158.651 171.149 155.47 159.207 160.827 149.887C166.184 140.568 178.126 137.387 187.445 142.745C196.82 148.157 200.001 160.044 194.588 169.363ZM39.1195 79.5749C33.7623 88.8941 21.8203 92.0749 12.5012 86.7178C3.18196 81.3606 0.0011535 69.4187 5.3583 60.0995C10.7154 50.7803 22.6574 47.5995 31.9766 52.9566C41.2958 58.3696 44.4766 70.2557 39.1195 79.5749V79.5749ZM5.4141 169.363C0.0569573 160.044 3.23776 148.157 12.557 142.745C21.8762 137.387 33.7623 140.568 39.1753 149.887C44.5324 159.207 41.3516 171.093 32.0324 176.506C22.6574 181.863 10.7712 178.682 5.4141 169.363V169.363ZM160.883 79.5749C155.526 70.2557 158.706 58.3696 168.026 52.9566C177.345 47.5995 189.231 50.7803 194.644 60.0995C200.001 69.4187 196.82 81.3048 187.501 86.7178C178.182 92.0749 166.24 88.8941 160.883 79.5749V79.5749ZM100.001 223.995C89.2311 223.995 80.5257 215.289 80.5257 204.519C80.5257 193.749 89.2311 185.044 100.001 185.044C110.771 185.044 119.477 193.749 119.477 204.519C119.477 215.233 110.771 223.995 100.001 223.995ZM100.001 44.4187C89.2311 44.4187 80.5257 35.7133 80.5257 24.9432C80.5257 14.1731 89.2311 5.46777 100.001 5.46777C110.771 5.46777 119.477 14.1731 119.477 24.9432C119.477 35.7133 110.771 44.4187 100.001 44.4187Z'
	]
};

export const faHerokuIcon: CustomIconConstruct = {
	prefix: 'fac',
	iconName: 'heroku-icon',
	icon: [
		64,
		64,
		[],
		'#000000',
		'M18 8C14.71 8 12 10.71 12 14V50C12 53.29 14.71 56 18 56H46C49.29 56 52 53.29 52 50V14C52 10.71 49.29 8 46 8H18ZM18 12H46C47.126 12 48 12.876 48 14V50C48 51.126 47.124 52 46 52H18C16.874 52 16 51.124 16 50V14C16 12.874 16.876 12 18 12ZM26 16L22 16.062C22 16.062 21.968 34.08 22 34C37.296 26.812 38 31.624 38 31.624V48H42V31.688C42 21.632 26 28 26 28V16ZM38.562 16C38.562 16 35.89 19.688 34 22H39.25C42.102 18.312 44 16 44 16H38.562ZM22 38V47.938L28 43L22 38Z'
	]
};

export const faNextIcon: CustomIconConstruct = {
	prefix: 'fac',
	iconName: 'next-icon',
	icon: [
		40,
		40,
		[],
		'none',
		'M18.6915 0.031262C18.6056 0.0390737 18.3322 0.0664148 18.0861 0.0859441C12.4109 0.597613 7.09501 3.65981 3.72815 8.36638C1.85334 10.9833 0.654235 13.9518 0.201154 17.096C0.0410137 18.1935 0.0214844 18.5177 0.0214844 20.0059C0.0214844 21.494 0.0410137 21.8182 0.201154 22.9157C1.28699 30.4189 6.62631 36.723 13.8678 39.0587C15.1645 39.4766 16.5316 39.7618 18.0861 39.9336C18.6915 40 21.3085 40 21.9139 39.9336C24.5972 39.6368 26.8704 38.9728 29.1124 37.8283C29.4561 37.6526 29.5225 37.6057 29.4756 37.5667C29.4444 37.5432 27.9797 35.5786 26.2221 33.2038L23.0271 28.8878L19.0235 22.9626C16.8206 19.7051 15.0083 17.0413 14.9927 17.0413C14.9771 17.0374 14.9614 19.67 14.9536 22.8845C14.9419 28.5129 14.938 28.7394 14.8677 28.8722C14.7661 29.0636 14.688 29.1417 14.524 29.2276C14.399 29.2901 14.2896 29.3018 13.6998 29.3018H13.0241L12.8445 29.1886C12.7273 29.1144 12.6413 29.0167 12.5828 28.9034L12.5007 28.7277L12.5085 20.8964L12.5203 13.0612L12.6413 12.9089C12.7038 12.8269 12.8366 12.7214 12.9304 12.6707C13.0905 12.5925 13.153 12.5847 13.8287 12.5847C14.6255 12.5847 14.7583 12.616 14.9653 12.8425C15.0239 12.905 17.1917 16.1703 19.7852 20.1035C22.3787 24.0367 25.9252 29.4073 27.6672 32.0438L30.831 36.8363L30.9911 36.7308C32.409 35.809 33.9088 34.4966 35.0962 33.1296C37.6233 30.2275 39.252 26.6888 39.7989 22.9157C39.959 21.8182 39.9785 21.494 39.9785 20.0059C39.9785 18.5177 39.959 18.1935 39.7989 17.096C38.713 9.59283 33.3737 3.28876 26.1322 0.953047C24.855 0.539025 23.4958 0.253896 21.9725 0.0820383C21.5975 0.0429796 19.0157 1.50277e-05 18.6915 0.031262V0.031262ZM26.8704 12.116C27.0579 12.2098 27.2102 12.3894 27.2649 12.5769C27.2962 12.6785 27.304 14.8501 27.2962 19.7442L27.2844 26.7669L26.0463 24.8687L24.8042 22.9704V17.8655C24.8042 14.565 24.8198 12.7097 24.8433 12.6199C24.9058 12.4011 25.0425 12.2293 25.23 12.1277C25.3901 12.0457 25.4487 12.0379 26.0619 12.0379C26.64 12.0379 26.7415 12.0457 26.8704 12.116V12.116Z M30.6347 36.9219C30.498 37.0078 30.4551 37.0664 30.5762 37C30.6621 36.9492 30.8027 36.8437 30.7793 36.8398C30.7675 36.8398 30.7011 36.8789 30.6347 36.9219ZM30.3652 37.0976C30.2949 37.1523 30.2949 37.1562 30.3809 37.1133C30.4277 37.0898 30.4668 37.0625 30.4668 37.0547C30.4668 37.0234 30.4473 37.0312 30.3652 37.0976ZM30.1699 37.2148C30.0996 37.2695 30.0996 37.2734 30.1856 37.2304C30.2324 37.207 30.2715 37.1797 30.2715 37.1718C30.2715 37.1406 30.252 37.1484 30.1699 37.2148ZM29.9746 37.332C29.9043 37.3867 29.9043 37.3906 29.9903 37.3476C30.0371 37.3242 30.0762 37.2968 30.0762 37.289C30.0762 37.2578 30.0567 37.2656 29.9746 37.332ZM29.6778 37.4882C29.5294 37.5663 29.5372 37.5976 29.6856 37.5234C29.752 37.4882 29.8028 37.4531 29.8028 37.4453C29.8028 37.4179 29.7989 37.4218 29.6778 37.4882Z'
	]
};

export const faVercelIcon: CustomIconConstruct = {
	prefix: 'fac',
	iconName: 'vercel-icon',
	icon: [24, 24, [], '#626262', 'M24 22.525H0l12-21.05l12 21.05z']
};

export const faTypeScriptIcon: CustomIconConstruct = {
	prefix: 'fac',
	iconName: 'typescript-icon',
	icon: [
		200,
		133,
		[],
		'none',
		'M0 13.3592V25.0203H37.2012V130.901H63.5997V25.0203H100.801V13.5738C100.801 7.13512 100.801 1.91264 100.515 1.76956C100.515 1.55494 77.8363 1.4834 50.2931 1.4834L0.214624 1.69802V13.4307L0 13.3592V13.3592ZM167.191 1.41186C174.488 3.12884 180.068 6.41971 185.076 11.6422C187.723 14.5038 191.658 19.5117 191.944 20.7994C191.944 21.2286 179.567 29.5989 172.055 34.249C171.769 34.4637 170.625 33.2475 169.48 31.3874C165.76 26.0934 161.968 23.8041 156.03 23.3749C147.445 22.8025 141.722 27.3096 141.722 34.8214C141.722 37.1107 142.151 38.3984 143.01 40.2585C144.942 44.1932 148.519 46.5541 159.607 51.4188C180.068 60.2183 188.939 66.0131 194.305 74.3119C200.386 83.6122 201.745 98.2065 197.667 109.152C193.088 121.1 181.928 129.184 165.974 131.831C160.967 132.689 149.52 132.546 144.155 131.616C132.708 129.47 121.762 123.747 115.037 116.378C112.39 113.516 107.311 105.861 107.597 105.361L110.316 103.644L121.047 97.4195L129.131 92.6978L130.991 95.2018C133.352 98.9219 138.646 103.93 141.722 105.647C151.022 110.44 163.471 109.796 169.623 104.216C172.27 101.784 173.415 99.2081 173.415 95.631C173.415 92.3401 172.914 90.8378 171.269 88.3338C168.979 85.1861 164.401 82.6106 151.523 76.8873C136.714 70.5917 130.419 66.5855 124.552 60.433C121.19 56.7128 118.114 50.918 116.683 46.1248C115.61 41.9755 115.252 31.8167 116.254 27.7388C119.33 13.4307 130.133 3.415 145.585 0.553372C150.593 -0.448198 162.397 -0.0189537 167.334 1.26878L167.191 1.41186V1.41186Z'
	]
}

library.add(faHerokuIcon, faVercelIcon);

/*
<svg width="200" height="133" viewBox="0 0 200 133" fill="none" xmlns="http://www.w3.org/2000/svg">
<path M0 13.3592V25.0203H37.2012V130.901H63.5997V25.0203H100.801V13.5738C100.801 7.13512 100.801 1.91264 100.515 1.76956C100.515 1.55494 77.8363 1.4834 50.2931 1.4834L0.214624 1.69802V13.4307L0 13.3592V13.3592ZM167.191 1.41186C174.488 3.12884 180.068 6.41971 185.076 11.6422C187.723 14.5038 191.658 19.5117 191.944 20.7994C191.944 21.2286 179.567 29.5989 172.055 34.249C171.769 34.4637 170.625 33.2475 169.48 31.3874C165.76 26.0934 161.968 23.8041 156.03 23.3749C147.445 22.8025 141.722 27.3096 141.722 34.8214C141.722 37.1107 142.151 38.3984 143.01 40.2585C144.942 44.1932 148.519 46.5541 159.607 51.4188C180.068 60.2183 188.939 66.0131 194.305 74.3119C200.386 83.6122 201.745 98.2065 197.667 109.152C193.088 121.1 181.928 129.184 165.974 131.831C160.967 132.689 149.52 132.546 144.155 131.616C132.708 129.47 121.762 123.747 115.037 116.378C112.39 113.516 107.311 105.861 107.597 105.361L110.316 103.644L121.047 97.4195L129.131 92.6978L130.991 95.2018C133.352 98.9219 138.646 103.93 141.722 105.647C151.022 110.44 163.471 109.796 169.623 104.216C172.27 101.784 173.415 99.2081 173.415 95.631C173.415 92.3401 172.914 90.8378 171.269 88.3338C168.979 85.1861 164.401 82.6106 151.523 76.8873C136.714 70.5917 130.419 66.5855 124.552 60.433C121.19 56.7128 118.114 50.918 116.683 46.1248C115.61 41.9755 115.252 31.8167 116.254 27.7388C119.33 13.4307 130.133 3.415 145.585 0.553372C150.593 -0.448198 162.397 -0.0189537 167.334 1.26878L167.191 1.41186V1.41186Z" fill="black"/>
</svg>

M0 13.3592V25.0203H37.2012V130.901H63.5997V25.0203H100.801V13.5738C100.801 7.13512 100.801 1.91264 100.515 1.76956C100.515 1.55494 77.8363 1.4834 50.2931 1.4834L0.214624 1.69802V13.4307L0 13.3592V13.3592ZM167.191 1.41186C174.488 3.12884 180.068 6.41971 185.076 11.6422C187.723 14.5038 191.658 19.5117 191.944 20.7994C191.944 21.2286 179.567 29.5989 172.055 34.249C171.769 34.4637 170.625 33.2475 169.48 31.3874C165.76 26.0934 161.968 23.8041 156.03 23.3749C147.445 22.8025 141.722 27.3096 141.722 34.8214C141.722 37.1107 142.151 38.3984 143.01 40.2585C144.942 44.1932 148.519 46.5541 159.607 51.4188C180.068 60.2183 188.939 66.0131 194.305 74.3119C200.386 83.6122 201.745 98.2065 197.667 109.152C193.088 121.1 181.928 129.184 165.974 131.831C160.967 132.689 149.52 132.546 144.155 131.616C132.708 129.47 121.762 123.747 115.037 116.378C112.39 113.516 107.311 105.861 107.597 105.361L110.316 103.644L121.047 97.4195L129.131 92.6978L130.991 95.2018C133.352 98.9219 138.646 103.93 141.722 105.647C151.022 110.44 163.471 109.796 169.623 104.216C172.27 101.784 173.415 99.2081 173.415 95.631C173.415 92.3401 172.914 90.8378 171.269 88.3338C168.979 85.1861 164.401 82.6106 151.523 76.8873C136.714 70.5917 130.419 66.5855 124.552 60.433C121.19 56.7128 118.114 50.918 116.683 46.1248C115.61 41.9755 115.252 31.8167 116.254 27.7388C119.33 13.4307 130.133 3.415 145.585 0.553372C150.593 -0.448198 162.397 -0.0189537 167.334 1.26878L167.191 1.41186V1.41186Z
*/