import Icon from 'react-native-vector-icons/Ionicons';

interface CustomIconProps {
    size?: number;
    color?: string;
    name: string;
}

export const CustomIcon = (props: CustomIconProps) => {
    return (
        <Icon
            size={props.size || 24}
            color={props.color || '#000'}
            name={props.name}
        />
    );
}
