import { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Sidebar = {
    '/document/': [
        {
            text: '',
            items: [
                { text: '文档', link: '/document/index.md' },
                { text: 'UI', link: '/document/ui/ui.md' },
                { text: 'Components', link: '/document/components/components.md' },
                { text: 'Events', link: '/document/events/events.md' }
            ]
        }
    ]
}