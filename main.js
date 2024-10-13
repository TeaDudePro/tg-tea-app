import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'

const token = '7581241594:AAHrOo4le-fIATczXvOMBvNjgyOfz3bg0LI'
const webAppUrl = 'https://tmatea-app.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловть! Нажмите на кнопку ниже, чтобы запустить приложение',
        Markup.keyboard([
            Markup.button.webApp('Отправить сообщение', `${webAppUrl}/feedback`),
        ])
    )
})

bot.on(message('web_app_data'), async ctx => {
    const data = ctx.webAppData.data.json()
    ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty massage')
})

bot.launch()
