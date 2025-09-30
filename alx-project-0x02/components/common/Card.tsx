import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="p-6 w-xs border rounded-lg shadow">
            <h2 className="text-xl font-semibold text-center">{title}</h2>
            <p className="my-4 text-justify">{content} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, rem? </p>
        </div>
    );
}

export default Card;