import { createContext, useContext, useMemo, useState, ReactNode } from 'react'

type NotificationItem = {
  id: string
  name: string
  role: string
  preview: string
  time: string
  avatar: string
  unread: boolean
}

type NotificationsContextType = {
  notifications: NotificationItem[]
  unreadCount: number
  markAllRead: () => void
}

const NotificationsContext = createContext<NotificationsContextType | null>(null)

export function NotificationsProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: '1',
      name: 'Sarah Matthews',
      role: 'Individual Counsellor',
      preview: 'If you could send that inf...',
      time: '12:36',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&h=64&fit=crop&crop=faces',
      unread: true,
    },
    {
      id: '2',
      name: 'Karl Jones',
      role: 'Doctor',
      preview: 'If you could send that inf...',
      time: '12:36',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces',
      unread: false,
    },
    {
      id: '3',
      name: 'Jones Jarl',
      role: 'Pharmacist',
      preview: 'If you could send that inf...',
      time: '12:36',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=faces',
      unread: false,
    },
  ])

  const unreadCount = useMemo(
    () => notifications.filter((n) => n.unread).length,
    [notifications]
  )

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })))
  }

  const value = useMemo(
    () => ({ notifications, unreadCount, markAllRead }),
    [notifications, unreadCount]
  )

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  )
}

export function useNotifications() {
  const ctx = useContext(NotificationsContext)
  if (!ctx) throw new Error('useNotifications must be used within NotificationsProvider')
  return ctx
}
