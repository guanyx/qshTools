'use strict';

import qsh_page_urls from '../../asset/urls.js';
import compileTpl from '../../util/compileTpl.js';
import back from '../../util/back.js';

var template_structure = require('html!../template/structure.html');
var template_back = require('html!../template/back.html');
var template_icon = require('html!../template/icon.html');
var template_text = require('html!../template/head-text.html');
var template_menu = require('html!../template/head-menu.html');
var template_menu_item = require('html!../template/menu-item.html');
var template_menu_active = require('html!../template/menu-item-active.html');
var template_active = require('html!../template/head-active.html');

//预定义头部信息
var preMenu = {
    'xiaoxi': {
        name: '消息',
        icon: 'xiaoxiHead',
        handler: function(){
            location.href = qsh_page_urls.message
        }
    },
    'zhuye': {
        name: '主页',
        icon: 'baojifuben2',
        handler: function(){
            location.href = qsh_page_urls.home
        }
    },
    'huiyuan': {
        name: '我的企商',
        icon: 'huiyuan',
        handler: function(){
            location.href = qsh_page_urls.uCenter
        }
    },
    'lianxi': {
        name: '联系我们',
        icon: 'lianxi',
        handler: function(){
            location.href = qsh_page_urls.contact;
        }
    },
    'gouwuche': {
        name: '购物车',
        icon: 'gouwuche2',
        handler: function(){
            location.href = qsh_page_urls.cart;
        }
    },
    'back': {
        name: '返回',
        icon: '',
        handler: function(){
            return defaultBack();
        }
    },
    'address': {
        name: '收货地址',
        icon: 'shouhuodizhi',
        handler: function(){
            location.href = qsh_page_urls.address;
        }
    },
    'account': {
        name: '账户管理',
        icon: 'sfsiconyidongduanwodezhanghu',
        handler: function(){
            location.href = qsh_page_urls.account;
        }
    },
    'info': {
        name: '修改资料',
        icon: 'ziliao',
        handler: function(){
            location.href = qsh_page_urls.editInfo;
        }
    },
    'safe': {
        name: '账户安全',
        icon: 'anquanbaozhang',
        handler: function(){
            location.href = qsh_page_urls.safe;
        }
    },
    'manager': {
        icon: 'shezhi',
        items: [
            'address',
            'info',
            'safe'
        ]
    }
};

class Header{
    constructor(options){
        this.options = options;
        this.container = $(compileTpl(template_structure, options)).appendTo($(options.mount) || document.body);
        //不使用fixed定位头部
        if(options.fixed === false){
            this.container.css({
                position: 'relative'
            })
        }

        this.left_dom = this.container.find('.head_left');
        this.right_dom = this.container.find('.head_right');

        this.dom_map = {};

        this.initLeft();
        this.initRight();
    }

    append(item){
        this.addItem(this.right_dom, item);
    }

    prepend(item){
        this.addItem(this.right_dom, item, true);
    }

    remove(id){
        var dom = this.dom_map[id];
        if(dom){
            if(dom.data('menu')){
                dom.data('menu').remove();
            }
            dom.remove();
        }
    }

    active(id, add){
        var dom = this.dom_map[id];
        if(dom){
            if(add){
                //增加
                if(dom.hasClass('qsh-head-menu-item')){
                    this.addMenuActive(dom);
                }
                else {
                    this.addIconActive(dom);
                }
            }
            else {
                //删除
                if(dom.hasClass('qsh-head-menu-item')){
                    this.rmMenuActive(dom);
                }
                else {
                    this.rmIconActive(dom);
                }
            }
        }
    }

    addIconActive(dom){
        if(dom.find('.icon_active').length === 0){
            dom.append(template_active);
        }
    }

    rmIconActive(dom){
        dom.find('.icon_active').remove();
    }

    addMenuActive(dom){
        if(dom.find('.icon-active-wrapper').length === 0){
            dom.append(template_menu_active);
            dom.trigger('head-menu-active-change');
        }
    }

    rmMenuActive(dom){
        dom.find('.icon-active-wrapper').remove();
        dom.trigger('head-menu-active-change');
    }

    initLeft(){
        var leftItems = this.options.leftItems || ['back'];
        var hasBack = false;

        leftItems.forEach(item => {
            if(typeof item === 'string'){
                if(item === 'back'){
                    this.appendBack(preMenu['back']);
                    hasBack = true;
                }
                else if(preMenu[item]){
                    this.addItem(this.left_dom, preMenu[item]);
                }
            }
            else {
                if(item.icon === 'back'){
                    this.appendBack(item);
                    hasBack = true;
                }
                else {
                    this.addItem(this.left_dom, item);
                }
            }
        });

        if(!hasBack && !this.options.noBack){
            this.appendBack(preMenu['back']);
        }
    }

    initRight(){
        var rightItems = this.options.rightItems;
        rightItems && rightItems.forEach(item => {
            if(typeof item === 'string' && preMenu[item]){
                this.addItem(this.right_dom, preMenu[item]);
                if(item === 'xiaoxi'){
                    this.loadXiaoxi();
                }
            }
            else {
                this.addItem(this.right_dom, item);
            }
        })
    }

    addItem(dom, item, pre){
        var $dom;
        var method = 'appendTo';
        if(pre){
            method = 'prependTo';
        }
        var id = item.id || item.text || item.icon;

        if(item.text){
            $dom = $(compileTpl(template_text, item))[method](dom);
        }
        else if(item.icon){
            $dom = $(compileTpl(template_icon, item))[method](dom);
        }

        //菜单
        if(item.items){
            this.appendMenu($dom, item.items);
        }
        else {
            $dom.on('click', function(e){
                item.handler(e);
            });
        }

        this.dom_map[id] = $dom;
    }

    appendMenu(holder, list){
        var $menu = $(template_menu).appendTo(this.container);
        holder.data('menu', $menu);
        var $ul = $menu.find('.tkuang');

        this.container.on('head-menu-active-change', e => {
            if($ul.find('.icon-active-wrapper').length === 0){
                this.rmIconActive(holder);
            }
            else {
                this.addIconActive(holder);
            }
        });

        holder.click(e => {
            $menu.show();
            setTimeout(function(){
                $menu.find('.qsh-head-menu').css({
                    opacity: 1
                })
            }, 10);
        });

        $menu.on('click', function(){
            setTimeout(function(){
                $menu.find('.qsh-head-menu').css({
                    opacity: 0
                });
                $menu.hide();
            }, 10);
        });

        list.forEach(item => {
            var $dom;
            var realItem = item;
            if(typeof item === 'string' && preMenu[item]){
                realItem = preMenu[item];
                $dom = $(compileTpl(template_menu_item, realItem)).appendTo($ul);
                if(item === 'xiaoxi'){
                    this.loadXiaoxi();
                }
            }
            else {
                $dom = $(compileTpl(template_menu_item, item)).appendTo($ul);
            }

            $dom.on('click', function(e){
                realItem.handler(e);
            });

            var id = realItem.id || realItem.text || realItem.icon;
            this.dom_map[id] = $dom;
        })
    }

    appendBack(item){
        var back = $(template_back).prependTo(this.left_dom);
        back.on('click', function(e){
            if(item.handler(e) === false){
                return;
            }
            defaultBack();
        });
        this.dom_map['back'] = back;
    }

    loadXiaoxi(){
        var _this = this;
        setInterval(v => {
            var $menu = this.dom_map['xiaoxiHead'];
            if(!$menu){
                return;
            }
            var type = 'menu';
            if($menu.hasClass('head-icon')){
                type = 'icon';
            }

            $.ajax({
                url: '/Action/readMsgAction.do',
                data: {
                    type: 2
                },
                method: 'post'
            }).then(data => {
                if(parseInt(data.count) > 0){
                    type === 'menu' ? this.addMenuActive($menu) : this.addIconActive($menu);
                }
                else {
                    type === 'menu' ? this.rmMenuActive($menu) : this.rmIconActive($menu);
                }
            }, function(err){

            })
        }, 5000);
    }
}

function defaultBack(){
    back();
    return false;
}

function init(options){
    return new Header(options);
}

export default init;