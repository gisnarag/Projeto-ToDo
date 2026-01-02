import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import Input from "../components/input-text";
import InputCheckbox from "../components/input-checkbox";
import Skeleton from "../components/skeleton";
import Text from "../components/text";

import TrashIcon from "../assets/icons/trash.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import XIcon from "../assets/icons/x.svg?react";


// Estruturação de layouts usando o React Route-> Criando roteamentos para dividir a página em componentes, utilizando o modo declarativo do React Route
export default function PageComponents() {

    return (
        <Container>
            <div className="grid gap-3">
                <div className="flex flex-col gap-10">
                    <Text variant="body-md" className="text-pink-base">olá mundo</Text>
                    <Text variant="body-sm-bold" className="text-green-base">olá mundo</Text>
                    <Text variant="body-md-bold">Levar dog para passear</Text>
                </div>

                <div className="flex gap-1">
                    <Icon svg={TrashIcon} className="fill-green-base" />
                    <Icon svg={CheckIcon} />
                    <Icon svg={PencilIcon} />
                    <Icon svg={PlusIcon} />
                    <Icon svg={SpinnerIcon} animate />
                    <Icon svg={XIcon} />
                </div>

                <div className="flex gap-1">
                    <Badge variant="secondary">5</Badge>
                    <Badge variant="primary">2 de 5</Badge>
                    <Badge loading>5</Badge>
                </div>

                <div>
                    <Button icon={PlusIcon}>Nova Tarefa</Button>
                    <Button icon={PlusIcon} handling>Carregando..</Button>
                </div>

                <div className="flex gap-1">
                    <ButtonIcon icon={TrashIcon} />
                    <ButtonIcon icon={TrashIcon} variant="secondary" />
                    <ButtonIcon icon={TrashIcon} variant="tertiary" />
                    <ButtonIcon icon={TrashIcon} loading />
                    <ButtonIcon icon={TrashIcon} handling />
                </div>

                <div>
                    <Input />
                </div>

                <div>
                    <InputCheckbox />

                    <InputCheckbox loading />
                </div>

                <div>
                    <Card size="md">Olá mundo</Card>
                </div>

                <div className="space-y-2">
                    <Skeleton className="h-6" />
                    <Skeleton className="h-6" />
                    <Skeleton className="w-96 h-6" />
                </div>

            </div>
        </Container>
    )
}