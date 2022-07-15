const SortOptions = ({ visibility }) => {

  return (
    <div className={visibility === false ? 'sortOptions' : 'sortOptions_show'}></div>
  )
}


export default SortOptions;