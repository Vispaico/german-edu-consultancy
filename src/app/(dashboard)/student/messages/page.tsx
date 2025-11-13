'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function StudentMessagesPage() {
  const [newMessage, setNewMessage] = useState('')

  const messages = [
    {
      id: 1,
      from: 'Consultant',
      message: 'Hi! I reviewed your application to University of Melbourne. Your documents look good!',
      time: '2 hours ago',
      isFromStudent: false
    },
    {
      id: 2,
      from: 'You',
      message: 'Thank you! When can I expect to hear back from the university?',
      time: '1 hour ago',
      isFromStudent: true
    },
    {
      id: 3,
      from: 'Consultant',
      message: 'Typically 2-4 weeks. I will update you as soon as we hear from them.',
      time: '30 minutes ago',
      isFromStudent: false
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Messages</h1>
        <p className="text-gray-600">Chat with your education consultant</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          {/* Messages Thread */}
          <div className="space-y-4 mb-6 h-96 overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isFromStudent ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-md p-4 rounded-lg ${
                    msg.isFromStudent
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm font-medium mb-1">{msg.from}</p>
                  <p>{msg.message}</p>
                  <p className={`text-xs mt-2 ${
                    msg.isFromStudent ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex gap-2">
            <Textarea
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              rows={3}
            />
            <Button className="self-end bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
