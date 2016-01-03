// resto info
{
	_id: ObjectID('restoA00001'), // resto 연번
	name: '새마을식당', // 이름
	category: ObjectID('cateA00001'),
	description: '안녕하세요! 새마을식당입니다.', // 설명
	contact: '010-2590-1377',
	franchise: ObjectID('franA00001'), // false, or fran id

	gpslong: 126.95496520000006,
	gpslat : 37.4802701,

	founder: ObjectID('userA00001'), // 최초발견자
	founded_date: new Date(),
	owner: ObjectID('userA00001'), // 주인

	view_count: 0, // 조회수
	rating: 4.0, // 평점
	like: [ObjectID('userA00001'), ObjectID('userA00002')], // 좋아요

	menu: [ObjectID('menuA00001'), ObjectID('menuA00002')], // 메뉴들
	photo: ['good_saemauel1.jpg', 'good_saemauel2.jpg'],
	
	open_time: {
		mon: [0800, 1900],
		tue: [0800, 1900],
		wed: [0800, 1900],
		thu: [0800, 1900],
		fri: [0800, 2400],
		sat: [0000, 0600, 1200, 1900], // 규칙 결정
		sun: ['close']
	}
	// 휴무?

	comforts: {
		reservation: 'true',
		smoking: 'false',
		wifi: 'unknown',
		plug: 'unknown',
		wheel: 'unknown',
		parking: 'true',
		group: 'false',
		babyseat: 'true',
		childplay: 'false',
		delivery: 'false',
		pet: 'false',
		debit_card: 'true',
		togo: 'true',
		from_other: 'false',
		outdoor: 'false',
		coupon: 'true',
		membership: 'cj one'
	}
}

// menu info
{
	_id: ObjectID('menuA00001'), // menu 연번
	resto: ObjectID('restoA00001'),
	name: '7분 돼지김치찌개',
	category: ObjectID('cateA00002'),
	serving: 1, // 몇인분?
	price: 5000,
	description: '대대로 내려온 김치찌개',

	like: [ObjectID('userA00001'), ObjectID('userA00002')], // 좋아요
	view_count: 0, // 조회수
	rating: 5.0, // 평점

	detail: {
		weight: '100g', // 고기
		flavor: ['기본', '마늘', '간장', '매운맛'] // 맛종류
	}
	photo: ['good_saemauel1.jpg', 'good_saemauel2.jpg'],
}

// review
{
	_id: ObjectID('reviewA00001'),
	refer: ObjectID('menuA00001'), // resto or menu
	user: ObjectID('userA00001'),
	rating: 4.0, // google play랑 똑같이
	comment: '진짜 쩔어요 개맛있음',
	timestamp: new Date(),
	photo: ['good_saemauel1.jpg', 'good_saemauel2.jpg']
	like: [ObjectID('userA00002'), ObjectID('userA00003')], // 좋아요
}

// user info
{
	_id: ObjectID('userA00001'),
	custom_id: 'bll23',
	sex: 'male',
	birth_date: new Date(1994, 9-1, 22),

	workplace: '판교 다음카카오',
	local: {
		name1: '경기도 양주시 덕계동',
		name2: '경기도 군포시 산본동'
	},

	prefer_resto: [ObjectID('restoA00001'),ObjectID('restoA00002')],
	prefer_menu: [ObjectID('menuA00001'),ObjectID('menuA00002')],
	prefer_cate: [ObjectID('cateA00002'),ObjectID('cateA00003')],
	// cant_eat: []
}

// like table
{
	_id: ObjectID('likeA00001'),
	user_id: ObjectID('userA00001'),
	item: ObjectID('menuA00001'), // 메뉴든 음식점이든 리뷰든
	timestamp: new Date()
}

// user social link table
{
	_id: ObjectID('socialA00001'),
	facebook: 'bll23@nate.com',
	kakaotalk: 'bll23@nate.com',
	phone: '010-2590-1377',
	custom_id: 'bll23'
}

// contribution point table
{
	_id: ObjectID('recA00001'),
	user_id: ObjectID('userA00001'),
	item: ObjectID('cpA00001'), // 음식점 관련 공헌 - 종류 따라 얼마나 cp 올라가는지 따로 테이블
	timestamp: new Date()
}

// cp info table
// - ObjectID('cpA00001')

// categroy info table
// - ObjectID('cateA00002')

// friend table
// group table

// franchise table