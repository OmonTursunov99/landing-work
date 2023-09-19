<template>
    <section class="beeline-services-section">
        <div class="container">
            <div class="section-title">
                <h2>Народные сервисы</h2>
            </div>
            <div class="content-tabs-container">
                <div class="tabs-navigation">
                    <Flicking :options="cat_swiper_options">
                        <div key="1" class="panel one-link-slide">
                            <button type="button" class="active">Популярное</button>
                        </div>
                        <div key="2" class="panel one-link-slide">
                            <button type="button">Digital</button>
                        </div>
                        <div key="3" class="panel one-link-slide">
                            <button type="button">Роуминг</button>
                        </div>
                        <div key="4" class="panel one-link-slide">
                            <button type="button">Интернет</button>
                        </div>
                        <div key="5" class="panel one-link-slide">
                            <button type="button">Звонки</button>
                        </div>
                        <div key="6" class="panel one-link-slide">
                            <button type="button">SMS</button>
                        </div>
                        <div key="7" class="panel one-link-slide">
                            <button type="button">Базовые услуги</button>
                        </div>
                        <div key="8" class="panel one-link-slide">
                            <button type="button">Специальные предложения</button>
                        </div>
                    </Flicking>
                </div>
            </div>
            <div class="desktop-masonry-services-container" v-if="$viewport.isGreaterThan('tablet')">
                <div class="one-service-sizer"></div>
                <div
                    :class="`one-service h-${item.h} w-${item.w}`" :style="`background-color: ${item.background_color}; ${item.thumbnail ? `background-image: url(${item.thumbnail})` : '' }`"
                    v-for="item in desktop_services">
                    <div class="top-side">
                        <strong class="title">{{ item.name }}</strong>
                        <div class="excerpt" v-html="item.excerpt"></div>
                    </div>
                    <div class="f-side">
                        <nuxtLink :to="`/${$i18n.locale}/products/services/${item.slug}`" class="theme-button bordered">Подробнее</nuxtLink>
                    </div>
                </div>
            </div>
            <div class="tablet-masonry-services-container" v-if="$viewport.isGreaterOrEquals('small_mobile')  && !$viewport.isGreaterThan('tablet')">
                <div class="one-service-sizer"></div>
                <div
                    :class="`one-service h-${item.h} w-${item.w}`" :style="`background-color: ${item.background_color}; ${item.thumbnail ? `background-image: url(${item.thumbnail})` : '' }`"
                    v-for="item in tablet_services">
                    <div class="top-side">
                        <strong class="title">{{ item.name }}</strong>
                        <div class="excerpt" v-html="item.excerpt"></div>
                    </div>
                    <div class="f-side">
                        <nuxtLink :to="`/${$i18n.locale}/products/services/${item.slug}`" class="theme-button bordered">Подробнее</nuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking-inline.css";
export default {
    name: 'popular-services-section',
    components: {
        Flicking: Flicking
    },
    setup() {
        useHead({
            script: [
                { src: '/js/masonry.pkgd.min.js' }
            ]
        })
    },
    data() {
        return {
            msnry: null,
            msnry_tablet: null,
            window_width: 1440,
            cat_swiper_options: {
				moveType: ["freeScroll", { stopAtEdge: true }],
                align: "prev",
                horizontal: true,
                circular: true,
            },
            services: [
                {
                    name: 'Платежная система Beepul',
                    excerpt: `<p>Пополняйте свой мобильный счет через Beepul и получайте бонусы</p>`,
                    thumbnail: `/img/services/1.png`,
                    slug: 'beepul',
                    background_color: '#f6e4cc',
                    h: 2,
                    w: 1,
                },
                {
                    name: 'Beeline TV',
                    excerpt: `<p>Смотрите любимые фильмы, сериалы и ТВ каналы без расхода интернет-трафика!</p>`,
                    thumbnail: `/img/services/2.png`,
                    slug: 'beelinetv',
                    background_color: '#f7f4d5',
                    h: 1,
                    w: 2,
                },
                {
                    name: 'Делитесь общением',
                    excerpt: `<p>У близких закончились мегабайты? Поделитесь с ними своим интернет-трафиком, чтобы они всегда были онлайн.</p>`,
                    thumbnail: '',
                    slug: 'qwe',
                    background_color: '#d4ece9',
                    h: 1,
                    w: 1,
                },
                {
                    name: 'Beeline Music & Radio',
                    excerpt: `<p>Наслаждайтесь прослушиванием любимой музыки без расхода интернет-трафика!</p>`,
                    thumbnail: '',
                    slug: 'beepul',
                    background_color: '#f5d8e6',
                    h: 1,
                    w: 1,
                },
                {
                    name: 'Beeline VISA',
                    excerpt: `<p>Beeline VISA — это карта без физического носителя, предназначенная для платежей в интернете.</p>`,
                    thumbnail: '',
                    slug: 'beepul',
                    background_color: '#d8ebd4',
                    h: 1,
                    w: 1,
                },
                {
                    name: 'Beeline Пресса',
                    excerpt: `<p>Это значит, что при чтении новостей, журналов и статей через сервис у вас не расходуется интернет трафик!</p>`,
                    thumbnail: '',
                    slug: 'beepul',
                    background_color: '#daeaf7',
                    h: 1,
                    w: 1,
                },
            ]
        }
    },
    mounted() {
        // setTimeout(() => {
        //     this.init_masonry();
        // }, 2000)
        this.init_masonry_all()
        // window resize event
        window.addEventListener('resize', (data) => {
            this.window_width = data.target.innerWidth
        })
        this.init_masonry()
    },
    watch: {
        window_width: function(data) {
            if(data) {
                this.init_masonry()
            }
        }
    },
    methods: {
        init_masonry_all: function() {
            Promise.all([
                this.init_masonry()
            ])
        },
        init_masonry: function() {
            // масонри эффект
            if (process.client) {
                let elem = document.querySelector('.desktop-masonry-services-container');
                this.msnry = new Masonry( elem, {
                    // options
                    itemSelector: '.desktop-masonry-services-container .one-service',
                    columnWidth: ".desktop-masonry-services-container .one-service",
                    gutter: 20,
                    itemSelector: ".desktop-masonry-services-container .one-service"
                });
                let elem2 = document.querySelector('.tablet-masonry-services-container');
                if(elem2) {
                    let calced_column_width = elem2.offsetWidth / 2 - 10
                    this.msnry_tablet = new Masonry( elem2, {
                        // options
                        itemSelector: '.tablet-masonry-services-container .one-service',
                        columnWidth: calced_column_width,
                        gutter: 20,
                        resize: false,
                        cols: 2,
                        itemSelector: ".tablet-masonry-services-container .one-service"
                    });
                }
            }
        }
    },
    computed: {
        desktop_services: function() {
            return this.services.slice().sort((a, b) => {
                if (a.h > b.h) {
                    return -1;
                } else if (a.h < b.h) {
                    return 1;
                }
                if (a.w > b.w) {
                    return -1;
                } else if (a.w < b.w) {
                    return 1;
                }
                return 0;
            });
        },
        tablet_services: function() {
            let new_services = [];
            this.services.forEach((item) => {
                if(item.w == 2) {
                    new_services.push(item);
                }
            })
            this.services.forEach((item) => {
                if(item.h == 2) {
                    new_services.push(item);
                }
            })
            this.services.forEach((item) => {
                if(item.h == 1 && item.w === 1) {
                    new_services.push(item);
                }
            })
            return new_services
        }
    }
}
</script>
<style lang="scss" scoped>
$ptsans: 'PT Sans', sans-serif;
$divider: #E5E5E5;
$primary: #FFC800;
$info: #19aaff;
$drukwide: 'druk-wide', sans-serif;
$shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
$shadow2: 0px 4px 25px rgba(0, 0, 0, 0.07);
.beeline-services-section {
    padding: 56px 0 28px;
    .desktop-masonry-services-container,
    .tablet-masonry-services-container {
        margin-top: 32px;
    }
    .one-service-sizer {
        width: calc(100% / 4 - 15px);
    }
    .one-service {
        background-position: right bottom;
        justify-content: space-between;
        background-repeat: no-repeat;
        flex-direction: column;
        margin-bottom: 20px;
        padding: 32px;
        min-height: 281px;
        height: 281px;
        display: flex;
        width: calc(100% / 4 - 15px);
        &.w-2 {
            width: calc(calc(100% / 4 - 15px) * 2 + 20px);
        }
        &.h-2 {
            min-height: calc(281px * 2 + 20px);
            height: calc(281px * 2 + 20px);
        }
        .title {
            font-family: $drukwide;
            font-style: normal;
            line-height: 24px;
            margin: 0 0 12px;
            font-weight: 900;
            font-size: 20px;
            display: block;
            color: #000;
        }
        .theme-button {
            display: inline-block;
        }
    }
}
@media (min-width: 1200px) and (max-width: 1399px) {
    .beeline-services-section {
        .one-service {
            .title {
                line-height: 1.3;
                font-size: 18px;
            }
            p {
                font-size: 14px;
            }
        }
    }
}
@media (min-width: 940px) and (max-width: 1199px) {
    .beeline-services-section {
        .one-service {
            background-size: clamp(300px, 10vw, 500px);
            padding: 24px;
            height: auto;
            .title {
                line-height: 1.3;
                font-size: 18px;
            }
            p {
                font-size: 14px;
            }
        }
    }
}
@media (min-width: 701px) and (max-width: 939px) {
    .beeline-services-section {
        .one-service {
            width: calc(100% / 2 - 10px);
            margin-bottom: 20px;
            min-height: 280px;
            height: 280px;
            &.w-2 {
                width: 100%;
            }
            &.h-2 {
                min-height: calc(280px * 2 + 20px);
                height: calc(280px * 2 + 20px);
            }
            .title {
                font-size: 16px;
            }
        }
    }
}
</style>
<style lang="scss">
.beeline-services-section {
    .one-service {
        .excerpt {
            p {
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px;
                max-width: 360px;
                margin: 0;
                color: #000;
                & + .theme-button {
                    margin-top: 24px;
                }
            }
        }
    }
}
@media (min-width: 701px) and (max-width: 939px) {
    .beeline-services-section {
        padding: 40px 0 20px;
        .one-service {
            .excerpt {
                p {
                    line-height: 1.3;
                    font-size: 14px;
                }
            }
            .theme-button {
                padding: 12px 24px;
            }
        }
        .desktop-masonry-services-container,
        .tablet-masonry-services-container {
            margin-top: 23px;
        }
    }
}
</style>
