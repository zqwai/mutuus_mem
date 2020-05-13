const dataDb = {
	colors: ['#FF7A51','#FFA286','#FFC7B6',],
	value: 20,
	title:[
		{
			name:'敏捷',
			children:[
				{
					name:'速度',
					children:[{
							name: "动作速度",
						},{
							name: "位移速度",
						},{
							name: "速度耐力"
						}]
				},{
					name: "灵敏",
					children:[{
						name: "移动灵敏"
					},{
						name: "反应灵敏"
					},{
						name: "动作灵敏"
					}]
				}
			],
		},
		{
			name: "协调",
			children: [{
				name: "肢体协调性",
			},{
				name: "平衡性",
			},{
				name: "动作节奏",
			},{
				name: "空间定位",
			}]
		},{
			name: "柔韧",
			children: [{
				name: "关节灵活性",
			},{
				name: "关节稳定性",
			}],
		},{
			name: "耐力",
			children:[{
				name: "心肺耐力",
				children:[{
					name: "有氧耐力",
				},{
					name: "速度耐力",
				}]
			},{
				name: "心肺耐力",
				children:[{
					name: "力量耐力",
				},{
					name: "肌肉抗疲劳能力",
				}]
			}]
		},{
			name: "力量",
			children:[{
				name: "肌肉力量",
			},{
				name: "爆发力",
			},{
				name: "力量耐力",
			}]
		}
	]
};

let sunburstArray = new Array;


let val_a = dataDb.value,
			val_b = val_a/2,
			val_c = val_b/2,
			val_d = val_c/2;

let a_level = {
	color: dataDb.colors[0]
};
let b_level = {
	color: dataDb.colors[1]
};
let cd_level = {
	color: dataDb.colors[2]
};
let value = 20;

var sunburstData = [
	{
	name: "敏捷",
	value: value,
	itmeStyle: a_level,
	children: [
		{
			name: "速度",
			value: value/2,
			itmeStyle: b_level,
			children:
			[
				{
						name: "动作速度",
						value: value/2/3,
						itmeStyle: cd_level
					},
					{
						name: "位移速度",
						value: value/2/3,
						itmeStyle: cd_level
					},
					{
						name: "速度耐力",
						value: value/2/3,
						itmeStyle: cd_level
					}
			]
		},
	{
		name: "灵敏",
		value: value/2,
		itmeStyle: b_level,
		children: [
			{
					name: "移动灵敏",
					value: value/2/3,
					itmeStyle: cd_level
				},
				{
					name: "反应灵敏",
					value: value/2/3,
					itmeStyle: cd_level
				},
				{
					name: "动作灵敏",
					value: value/2/3,
					itmeStyle: cd_level
				}
			]
		}
	] 
},
{
	name: "协调",
	value: value,
	itmeStyle: a_level,
	children: [
		{
		name: "肢体协调性",
		value: value/4.0,
		itmeStyle: b_level
	},
	{
		name: "平衡性",
		value: value/4.0,
		itmeStyle: b_level
	},
	{
		name: "动作节奏",
		value: value/4.0,
		itmeStyle: b_level
	},
	{
		name: "空间定位",
		value: value/4.0,
		itmeStyle: b_level
	}
]
},
{
	name: "柔韧",
	value: value,
	itmeStyle: a_level,
	children: [{
		name: "关节灵活性",
		value: value/2,
		itmeStyle: b_level
	},
	{
		name: "关节稳定性",
		value: value/2,
		itmeStyle: b_level
	}]
},{
	name: "耐力",
	value: value,
	itmeStyle: a_level,
	children: [{
		name: "心肺耐力",
		value: value/2,
		itmeStyle: b_level,
		children: [{
			name: "有氧耐力",
			value: value/2/2,
			itmeStyle: cd_level
		},{
			name: "速度耐力",
			value: value/2/2,
			itmeStyle: cd_level
		}]
	},{
		name: "肌肉耐力",
		value: value/2,
		itmeStyle: b_level,
		children: [{
			name: "力量耐力",
			value: value/2/2,
			itmeStyle: cd_level
		},{
			name: "肌肉抗疲劳能力",
			value: value/2/2,
			itmeStyle: cd_level
		}]
	}]
},{
	name: "力量",
	value: value,
	itmeStyle: a_level,
	children: [{
		name: "肌肉力量",
		value: value/3,
		itmeStyle: b_level
	},{
		name: "爆发力",
		value: value/3,
		itmeStyle: b_level
	},{
		name: "力量耐力",
		value: value/3,
		itmeStyle: b_level
	}]
}];

module.exports = {
  sunburstData: sunburstData
}