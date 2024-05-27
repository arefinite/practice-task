const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='bg-muted py-4'>
      <section className='flex center items-center  justify-between'>
        <div>&copy; {year} by Arefinite | All Rights Reserved</div>
        <div>Design and Developed by Adnan Arefin</div>
      </section>
    </footer>
  )
}
export default Footer
