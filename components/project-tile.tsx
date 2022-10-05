interface ProjectTileProps {
  imgUrl: string
  title: string
  description: string
}

const ProjectTile = ({ imgUrl, title, description }: ProjectTileProps) => (
  <div className=" py-2 flex hover:bg-blue-50 justify-center items-center">
    <img className="pl-8" src={imgUrl} />
    <div className="pl-8 max-w-2xl divide-y-2">
      <div className="text-xl">{title}</div>
      <div>{description}</div>
    </div>
  </div>
)

export default ProjectTile
