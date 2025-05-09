import type { Meta, StoryObj } from '@storybook/react';
import BookItem from '../components/Book';
import { BrowserRouter } from 'react-router-dom';


const meta = {
  title: 'BookItem',
  component: BookItem,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ],
  args: { book: {
    image: "https://itbook.store/img/books/9781912047451.png",
    isbn13: "9781912047451",
    price: "$10.00",
    url: "https://itbook.store/books/9781912047451",
    subtitle: "A Guide to the Next Generation of JavaScript",
    title: "JavaScript: The Definitive Guide"}},
} satisfies Meta<typeof BookItem>;

type Story = StoryObj<typeof BookItem>;
export const Story: Story = {}

export default meta;
