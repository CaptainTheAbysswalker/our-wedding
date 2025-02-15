export const useTelegram = () => {
  const sendMessage = async (message: string) => {
    try {
      await fetch(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID}&text=${message}`
      );
    } catch (error) {
        console.log('Send telegram message error: ', error);
    }
  };

  return { sendMessage };
};
